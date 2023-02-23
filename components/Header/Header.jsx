
import { AuthContext } from '../../src/Assets/Context'
import React from 'react';
import { useContext } from "react";
import { Notifications} from "../notification/Notification";
import { Account } from "../Account/Account";
import { useState,useEffect } from 'react';
import "./index.css"
import { HeaderNav } from '../QuickNavigation/Headernav';

const Header=()=>{
const{showNotification,showAccount, setShowaccount}=useContext(AuthContext)

const [navSize, setnavSize] = useState("8rem");
const [navColor, setnavColor] = useState("transparent");
const listenScrollEvent = () => {
  window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
  window.scrollY > 10 ? setnavSize("6rem") : setnavSize("6.1rem");
};
useEffect(() => {
  window.addEventListener("scroll", listenScrollEvent);
  return () => {
    window.removeEventListener("scroll", listenScrollEvent);
  };
}, []);
return<header
style={{
    backgroundColor: navColor,
    height: navSize,
    transition: "500ms",
    position: navSize === "6rem" ? "fixed" : "relative",
    left: 0,
    right: 0,
    top:0,
    alignItems:'center'
  }}>
    <div className="logo">
        <img src="./images/sp-logo.jpg" />
    </div>
    <h3 >SuperPass Travels</h3>
  <div style={{
    display:'flex',
    alignItems:'center'
  }}>
  <HeaderNav/>
    <div className="account" ><img src="./images/Account.jpeg" onClick={()=>{
        setShowaccount(true)
    }}/></div>
  </div>

    
{showNotification&&<Notifications/>}
{showAccount&&<Account/>}
    
</header>





}
export {Header}