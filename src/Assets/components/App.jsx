import React from "react";
import { AuthProvider } from "../Context";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Cart } from "./Cart";
import { AuthContext } from "../Context";
import { useContext } from "react";

const App = () => {
  const{data_from_server,setdata_from_server}=useContext(AuthContext)
  const {Cart,setCart}=useContext(AuthContext)
  
  localStorage.setItem("Cart1",JSON.stringify(data_from_server))
  return  <AuthProvider>

<Header/>
<Home/>
<Footer/>
  </AuthProvider>
}


export { App };
