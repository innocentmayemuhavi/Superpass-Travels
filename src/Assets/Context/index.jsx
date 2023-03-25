import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: {
    id: 401839,
    name: "Iris Maye",
    email: "irismaye@gmail.com",
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
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 401839,
    name: "Iris Maye",
    email: "irismaye@gmail.com",
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
    totalAmount: 0,
  });
  const [productData, setProductData] = useState({});
  useEffect(() => {
    const savedCart =
      localStorage.getItem("Cart1") === "undefined"
        ? {
            cars: [],
            totalAmount: 0,
          }
        : JSON.parse(localStorage.getItem("Cart1"));
    setCart(savedCart);
  }, []);

  useEffect(() => {
    if (Cart.cars) {
      localStorage.setItem("Cart1", JSON.stringify(Cart));
    }
  }, [Cart]);

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
