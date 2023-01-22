
import { AuthContext } from "../Context"
import React from 'react';
import { useContext } from "react";
import { Notifications} from "./Notification";
import { Account } from "./Account";



const Header=()=>{
const{showNotification,setShowNotification}=useContext(AuthContext)
const {showAccount, setShowaccount}=useContext(AuthContext)
const {ShowCart,setShowCart}=useContext(AuthContext)


return<header>
    <div className="logo">
        <img src="./src/Assets/images/sp-logo.jpg" />
    </div>
    <h3 >SuperPass Travels</h3>
    <div className="account" ><img src="./src/Assets/images/Account.jpeg" onClick={()=>{
        setShowaccount(true)
    }}/></div>
    
{showNotification&&<Notifications/>}
{showAccount&&<Account/>}
    
</header>





}
export {Header}