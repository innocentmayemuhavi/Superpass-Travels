import { createContext, useEffect, useState } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  update,
  set,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseUrl: "https://superpasstravels-default-rtdb.firebaseio.com/",
  projectId: "superpasstravels",
};

const app = initializeApp(appSettings);
const dB = getDatabase(app);

const dataList = ref(dB, "data");

const AuthContext = createContext({
  user: {
    id: 0,
    name: "",
    email: "",
    password: 1234,
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
  systemUsers: {
    customers: [],
  },
  setSystemUsers: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: "",
    password: 1234,
  });
  const [isloggedin, setisLoggedin] = useState(false);
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
  const [systemUsers, setSystemUsers] = useState({ customers: [] });
  const [cloudData, setCloudData] = useState({
    cars: [],
    bookings: [],
    hireAmount: 0,
    bookingsAmount: 0,
    totalAmount: 0,
  });

  useEffect(() => {
    onValue(dataList, (snapshot) => {
      const onlinedata = Object.keys(snapshot.val());
      console.log(onlinedata);
      onlinedata === "undefined" || null || undefined
        ? set(dataList, {
            cars: [{}],
            bookings: [{}],
            hireAmount: 0,
            bookingsAmount: 0,
            totalAmount: 0,
          })
        : setCloudData(Object.values(snapshot.val()));
    });
    const savedCart =
      localStorage.getItem("Cart1") === "undefined"
        ? {
            cars: [],
            bookings: [],
            hireAmount: 0,
            bookingsAmount: 0,
            totalAmount: 0,
          }
        : JSON.parse(localStorage.getItem("Cart1"));

    setCart(savedCart);
    onValue(dataList, (snapshot) => {
      const onlinedata = Object.keys(snapshot.val());
      console.log(onlinedata);
    });
   
  }, []);

  useEffect(() => {
    if (Cart) {
      localStorage.setItem("Cart1", JSON.stringify(Cart));
      update(dataList, Cart);
    }
  

  }, [Cart]);

  useEffect(() => {
    const savedusers =
      localStorage.getItem("cust") === "undefined"
        ? {}
        : JSON.parse(localStorage.getItem("cust"));
    setSystemUsers(savedusers);
  }, []);

  useEffect(() => {
    if (systemUsers) {
      localStorage.setItem("cust", JSON.stringify(systemUsers));
    }
  }, [systemUsers]);

  useEffect(() => {
    const saveduser =
      localStorage.getItem("userdata") === "undefined"
        ? {}
        : JSON.parse(localStorage.getItem("userdata"));
    setUser(saveduser);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("userdata", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const save =
      localStorage.getItem("loggedin") === "undefined"
        ? [false]
        : JSON.parse(localStorage.getItem("loggedin"));
    setisLoggedin(save);
  }, []);

  useEffect(() => {
    if (isloggedin) {
      localStorage.setItem("loggedin", JSON.stringify(isloggedin));
    }
  }, [isloggedin]);
  useEffect(() => {
    const savedData =
      localStorage.getItem("prod") === "undefined"
        ? {}
        : JSON.parse(localStorage.getItem("prod"));
    setProductData(savedData);
  }, []);

  useEffect(() => {
    if (productData) {
      localStorage.setItem("prod", JSON.stringify(productData));
    }
  }, [productData]);

  useEffect(() => {
    const savedData1 =
      localStorage.getItem("serv") === "undefined"
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
        user,
        setUser,
        isLoading,
        setisLoading,
        isloggedin,
        setisLoggedin,
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
        systemUsers,
        setSystemUsers,
        cloudData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
