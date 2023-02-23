
import { AuthContext } from '../../src/Assets/Context'
import React from 'react';
import { useContext } from "react";
import { Notifications} from "../notification/Notification";
import { Account } from "../Account/Account";

import "./index.css"

const Header=()=>{
const{showNotification,showAccount, setShowaccount}=useContext(AuthContext)
return<header>
    <div className="logo">
        <img src="./images/sp-logo.jpg" />
    </div>
    <h3 >SuperPass Travels</h3>
    <div className="account" ><img src="./images/Account.jpeg" onClick={()=>{
        setShowaccount(true)
    }}/></div>
    
{showNotification&&<Notifications/>}
{showAccount&&<Account/>}
    
</header>





}
export {Header}