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
import {
  getFirestore,
  doc,
  updateDoc,
  setDoc,
  getDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

import { getAnalytics } from "firebase/analytics";
import ServiceData from "../../../components/SystemData/ServiceData";
const firebaseConfig = {
  apiKey: "AIzaSyCKKDgFMvxvI6PogJBEoUUaJpEWVRVdv5Q",
  authDomain: "superpass-fdeeb.firebaseapp.com",
  databaseURL: "https://superpass-fdeeb-default-rtdb.firebaseio.com",
  projectId: "superpass-fdeeb",
  storageBucket: "superpass-fdeeb.appspot.com",
  messagingSenderId: "648988901889",
  appId: "1:648988901889:web:6013d612d4ec3a2e627600",
  measurementId: "G-7Q35YZ8EQD",
};

const app = initializeApp(firebaseConfig);
const mediaDb = getStorage(app);
const analytics = getAnalytics(app);
const database = getFirestore();

const auth = getAuth();
const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    onAuthStateChanged(auth, async (userData) => {
      try {
        setIsLoading(true)
        setUser(userData);
        const docRef1 = doc(database, "cars", "sKbnRVOUTouZUUCG8g9F");

        if (userData) {
          const docref = doc(database, "users", auth.currentUser.uid);

          getDoc(docref).then(async (doc) => {
            setCart({
              ...doc.data().cart,
            });

            setUser((prev) => {
              return {
                ...prev,
                phone: doc.data().userdata.phoneNumber,
                lisence: doc.data().userdata.lisence,
                isLisenceAuthenticated:
                  doc.data().userdata.isLisenceAuthenticated,
              };
            });
          });
          onSnapshot(docref, async (doc) => {
            setCart({
              ...doc.data().cart,
            });
            setUser((prev) => {
              return {
                ...prev,
                ...doc.data.userdata,
              };
            });
          });
        }

        getDoc(docRef1).then(async (doc) => {
          setCars({
            ...doc.data().cars,
          });
        });
        onSnapshot(docRef1, async (doc) => {
          setCars({
            ...doc.data().cars,
          });
        });
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    });
  }, []);

  const signin = async (email, password) => {
    try {
      setIsLoading(true)
      await signInWithEmailAndPassword(auth, email, password);
      setWarning("");
      setIsLoading(false)
    } catch (e) {
      const w1 = e.code.split("auth/").join("");
      const w2 = w1.split("-").join(" ");
      setWarning(w2);
      setIsLoading(false)
    }
  };

  const updateData = async () => {
    try {
      if (auth.currentUser.uid) {
        const docRef = doc(database, "users", auth.currentUser.uid);
        const docRef1 = doc(database, "cars", "sKbnRVOUTouZUUCG8g9F");

        await updateDoc(docRef, {
          cart: Cart,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const uploadCar = async () => {
    try {
      setIsLoading(true);
      if (Object.values(cars).length > 1) {
        const docRef1 = doc(database, "cars", "sKbnRVOUTouZUUCG8g9F");

        await updateDoc(docRef1, {
          cars: cars,
        });
        console.log("added car");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    uploadCar();
  }, [cars]);

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
    updateData();
  }, [Cart]);

  const signup = async (email, password, name, phone) => {
    try {
      setIsLoading(true)
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
      setIsLoading(false)
    } catch (e) {
      const w1 = e.code.split("auth/").join("");
      const w2 = w1.split("-").join(" ");
      setWarning(w2);
      setIsLoading(false)
    }
  };

  const signout = async () => {
    
    try {
      setIsLoading(true)
      await signOut(auth);
      await setCart({
        cars: [],
        bookings: [],
        hireAmount: 0,
        bookingsAmount: 0,
        totalAmount: 0,
      });
      setIsLoading(false)
    } catch (e) {
      console.log(e.code);
      setIsLoading(false)
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
        cars,
        ref,
        mediaDb,
        uploadBytesResumable,
        getDownloadURL,
        setCars,
        isLoading,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
