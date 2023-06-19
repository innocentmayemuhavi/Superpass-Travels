import { createContext, useEffect, useState } from "react";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  updateDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const AuthContext = createContext({
  user: {
    id: 0,
    name: "",
    email: "",
    password: 1234,
    isLicenseAuthenticated: false,
    license: {
      id: 0,
      exp_date: "",
      category: "",
      license_number: "",
    },
  },

  setUser: () => {},
  isLoading: true,
  setisLoading: () => {},
  isloggedin: false,
  setisLoggedin: () => {},
  showAccount: false,
  Notification: "",
  setNotification: () => {},
  showNotification: false,
  setShowNotification: () => {},
  Cart: {
    cars: [],
    bookings: [],
    hireAmount: 0,
    bookingsAmount: 0,
    totalAmount: 0,
  },
  setCart: () => {},
  cloudData: {
    cars: [],
    bookings: [],
    hireAmount: 0,
    bookingsAmount: 0,
    totalAmount: 0,
  },
  setCloudData: () => {},
  searchval: "",
  setSearchval: () => {},
  showPhoneNav: false,
  setShowPhoneNav: () => {},
  showSliderButton: true,
  setShowSliderButton: () => {},
  tabnumber: 1,
  settabnumber: () => {},
  productData: {},
  setProductData: () => {},
  serviceData: {},
  setServiceData: () => {},
  setSystemUsers: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [showAccount, setShowaccount] = useState(false);
  const [Notification, setNotification] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [searchval, setSearchval] = useState("");
  const [showPhoneNav, setShowPhoneNav] = useState(false);
  const [showSliderButton, setShowSliderButton] = useState(true);
  const [tabnumber, settabnumber] = useState(1);
  const [Cart, setCart] = useState({
    cars: [],
    bookings: [],
    hireAmount: 0,
    bookingsAmount: 0,
    totalAmount: 0,
  });
  const [productData, setProductData] = useState({});
  const [serviceData, setServiceData] = useState({});

  useEffect(() => {
    if (productData) {
      localStorage.setItem("prod", JSON.stringify(productData));
    }
  }, [productData]);

  useEffect(() => {
    const savedData1 =
      localStorage.getItem("serv") === null
        ? {}
        : JSON.parse(localStorage.getItem("serv"));
    setServiceData(savedData1);
  }, []);

  useEffect(() => {
    if (serviceData) {
      localStorage.setItem("serv", JSON.stringify(serviceData));
    }
  }, [serviceData]);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        setisLoading,
        showAccount,
        setShowaccount,
        Notification,
        setNotification,
        showNotification,
        setShowNotification,
        Cart,
        setCart,
        searchval,
        setSearchval,
        showPhoneNav,
        setShowPhoneNav,
        showSliderButton,
        setShowSliderButton,
        tabnumber,
        settabnumber,
        productData,
        setProductData,
        serviceData,
        setServiceData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
