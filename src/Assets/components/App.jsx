import React from "react";
import { AuthProvider } from "../Context";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Cart } from "./Cart";

const App = () => {
  return  <AuthProvider>
<Header/>
<Home/>
<Footer/>
  </AuthProvider>
}


export { App };
