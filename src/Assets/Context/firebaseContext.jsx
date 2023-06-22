import { createContext, useContext, useEffect, useState } from "react";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
  deleteUser,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  updateDoc,
  getDoc,
  setDoc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOLpFuoFE8r3Kne6V7pRFjjwhQwEjT7SI",
  authDomain: "superpasstravels.firebaseapp.com",
  databaseURL: "https://superpasstravels-default-rtdb.firebaseio.com",
  projectId: "superpasstravels",
  storageBucket: "superpasstravels.appspot.com",
  messagingSenderId: "352953280108",
  appId: "1:352953280108:web:2b13d9621674575d325a49",
  measurementId: "G-SZ0RV8XYPL",
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
      setWarning("");
    } catch (e) {
      const w1 = e.code.split("auth/").join("");
      const w2 = w1.split("-").join(" ");
      setWarning(w2);
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

  const resetpassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      const w1 = error.code.split("auth/").join("");
      const w2 = w1.split("-").join(" ");
      setWarning(w2);
    }
  };
  const deleteAccount = async () => {
    try {
      const usertodelete = await auth.currentUser;

      const docref = doc(database, "users", usertodelete.uid);
      await deleteDoc(docref);
      await deleteUser(usertodelete);
    } catch (error) {
      console.log(error);
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
        setWarning,
        Cart,
        setCart,
        setUser,
        updateUser,
        resetpassword,
        deleteAccount,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
