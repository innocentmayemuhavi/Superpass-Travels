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
  setShowaccount: () => {},
  showBooking: false,
  setShowBooking: () => {},
  booked: [{}],
  setBooked: () => {},
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
  const [showBooking, setShowBooking] = useState(false);
  const [showAccount, setShowaccount] = useState(false);
  const [booked, setBooked] = useState([{}]);
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

  useEffect(() => {
    const savedCart =
      localStorage.getItem("Cart") === "undefined"
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
        showBooking,
        setShowBooking,
        booked,
        setBooked,
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
