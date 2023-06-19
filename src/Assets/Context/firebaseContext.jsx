import { createContext, useContext, useEffect, useState } from "react";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  updateProfile,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  updateDoc,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKKDgFMvxvI6PogJBEoUUaJpEWVRVdv5Q",
  authDomain: "superpass-fdeeb.firebaseapp.com",
  databaseURL: "https://superpass-fdeeb-default-rtdb.firebaseio.com",
  projectId: "superpass-fdeeb",
  storageBucket: "superpass-fdeeb.appspot.com",
  messagingSenderId: "648988901889",
  appId: "1:648988901889:web:f24a9a0a703a693f627600",
  measurementId: "G-H5K80682K8",
};

initializeApp(firebaseConfig);
const database = getFirestore();

const auth = getAuth();
const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [warning, setWarning] = useState("");
  const [profile, setProfile] = useState({
    displayName: "",
    phoneNumber: "",
  });
  const [Cart, setCart] = useState({
    cars: [],
    bookings: [],
    hireAmount: 0,
    bookingsAmount: 0,
    totalAmount: 0,
  });

  useEffect(async () => {
    const unsubscribe = onAuthStateChanged(auth, async (userData) => {
      try {
        await setUser(userData);

        if (userData) {
          const docref = doc(database, "users", auth.currentUser.uid);
          getDoc(docref).then(async (doc) => {
            await console.log(doc.data());
            await setCart({
              ...doc.data().cart,
            });

            await setUser((prev) => {
              return {
                ...prev,
                phone: doc.data().userdata.phoneNumber,
                lisence: doc.data().userdata.lisence,
                isLisenceAuthenticated:
                  doc.data().userdata.isLisenceAuthenticated,
              };
            });
            console.log("done loading user data on database", doc.data());
          });
          onSnapshot(docref, async (doc) => {
            console.log(doc.data());
            await setCart({
              ...doc.data().cart,
            });
            await setUser((prev) => {
              return {
                ...prev,
                ...doc.data.userdata,
              };
            });
          });
        }
      } catch (error) {
        console.log(error);
      }
    });

    return () => unsubscribe();
  }, []);

  const signin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setWarning("");
    } catch (e) {
      const w1 = e.code.split("auth/").join("");
      const w2 = w1.split("-").join(" ");
      setWarning(w2);
    }
  };

  // useEffect(() => {
  //   return async () => {
  //     const uid = await auth.currentUser.uid;

  //     if (uid) {
  //       const docref = await doc(database, "users", uid);
  //       getDoc(docref).then(async (doc) => {
  //         // await console.log("Dataii", doc.data());
  //       });

  //       // console.log(Cart);
  //     }
  //   };
  // }, [Cart]);
  const updateData = async () => {
    try {
      const docRef = doc(database, "users", auth.currentUser.uid);
      await updateDoc(docRef, {
        cart: Cart,
      });

      console.log("Database updated successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateUser = async (userData) => {
    const uid = auth.currentUser.uid;

    try {
      const docRef = doc(database, "users", uid);
      const data = userData;
      await updateDoc(docRef, {
        userdata: {
          phoneNumber: user.phone,
          lisence: {
            email: data.email,
            id: data.id,
            license_number: data.license_number,
            exp_date: data.exp_date,
            category: data.category,
          },
          isLisenceAuthenticated: true,
        },
      });
      setUser((prev) => {
        return {
          ...prev,
          lisence: {
            email: data.email,
            id: data.id,
            license_number: data.license_number,
            exp_date: data.exp_date,
            category: data.category,
          },
          isLisenceAuthenticated: true,
        };
      });
      console.log("Database user data updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // const process = async () => {
    //   const uid = await auth.currentUser;
    //   if (uid) {
    //     console.log("Cart changed");
    //     console.log("changed cart", Cart);
    //     try {
    //       const docRef = doc(database, "users", auth.currentUser.uid);
    //       updateDoc(docRef, {
    //         cart: Cart,
    //       });
    //       console.log("Database updated successfully");
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // };

    // return () => process();

    updateData();
  }, [Cart]);

  const signup = async (email, password, name, phone) => {
    try {
      setProfile({
        displayName: name,
        phoneNumber: phone,
      });
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      if (userData) {
        const isNewUser = getAdditionalUserInfo(userData).isNewUser;

        if (isNewUser) {
          await setDoc(doc(database, "users", userData.user.uid), {
            userdata: {
              phoneNumber: phone,
              lisence: {},
              isLisenceAuthenticated: false,
            },
            cart: {
              cars: [],
              bookings: [],
              hireAmount: 0,
              bookingsAmount: 0,
              totalAmount: 0,
            },
          });
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const signout = async () => {
    try {
      await signOut(auth);
      await setCart({
        cars: [],
        bookings: [],
        hireAmount: 0,
        bookingsAmount: 0,
        totalAmount: 0,
      });
    } catch (e) {
      console.log(e.code);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        signin,
        signup,
        user,
        profile,
        signout,
        warning,
        Cart,
        setCart,
        setUser,
        updateUser,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
