import { createContext, useEffect, useState } from "react";

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
    customers:[]
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
  const [systemUsers, setSystemUsers] = useState( {customers:[]});

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (Cart) {
      localStorage.setItem("Cart1", JSON.stringify(Cart));
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
       setSystemUsers
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
