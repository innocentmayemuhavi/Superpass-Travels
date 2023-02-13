import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: {
    id: 401839,
    name: "Maye",
    email: "innocentmayemuhavi",
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
  booked:[{}],
  setBooked:()=>{},
  Notification:"",
  setNotification:()=>{},
  showNotification:false,
  setShowNotification:()=>{},
  Cart: {
    cars: [],
    totalAmount:0,
  },
  setCart:()=>{},
  ShowCart:false,
  setShowCart:()=>{}
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 401839,
    name: "Maye",
    email: "innocentmayemuhavi",
    password: 1234,
  });
  const [isloggedin, setisLoggedin] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [showBooking, setShowBooking] = useState(false);
  const [showAccount, setShowaccount] = useState(false);
  const [booked,setBooked]=useState([{}])
  const [Notification,setNotification]=useState("")
  const [showNotification,setShowNotification]=useState(false)
  const  [Cart,setCart]=useState({
    cars: [],
    totalAmount:0,
  },)

  const [ShowCart,setShowCart]=useState(false)

  useEffect(() => {
    const savedCart =
      localStorage.getItem("Cart") === "undefined"
        ? {
            cars: [],
            totalAmount: 0,
          }
        : JSON.parse(localStorage.getItem("Cart1"));
   setCart(savedCart)

  }, []);

  useEffect(()=>{
if(Cart.cars){
  localStorage.setItem("Cart1",JSON.stringify(Cart))
}
  },[Cart])

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
        ShowCart,
        setShowCart

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
