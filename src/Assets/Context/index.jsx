import { createContext, useState } from "react";

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
  isloggedin: true,
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
  Cart:[],
  setCart:()=>{},
  data_from_server:JSON.parse(localStorage.getItem("Cart1")),
  setdata_from_server:()=>{},
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
  const [isloggedin, setisLoading] = useState(true);
  const [isLoading, setisLoggedin] = useState(true);
  const [showBooking, setShowBooking] = useState(false);
  const [showAccount, setShowaccount] = useState(false);
  const [booked,setBooked]=useState([{}])
  const [Notification,setNotification]=useState("")
  const [showNotification,setShowNotification]=useState(false)
  const  [Cart,setCart]=useState([])
  const [data_from_server,setdata_from_server]=useState(JSON.parse(localStorage.getItem("Cart1")))
  const [ShowCart,setShowCart]=useState(false)

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
        data_from_server,
        setdata_from_server,
        ShowCart,
        setShowCart

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
