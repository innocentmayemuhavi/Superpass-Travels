
import { AuthContext } from "../Context"
import React from 'react';
import { useContext } from "react";

const Notifications=()=>{
    const{Notification,setNotification}=useContext(AuthContext)
    const{showNotification,setShowNotification}=useContext(AuthContext)
    const {ShowCart,setShowCart}=useContext(AuthContext)
    return<section className="notification">
        <img  src="./src/Assets/images/cancel.png"  onClick={()=>{
            setShowNotification(false)
        }}/>
{Notification}
<button onClick={()=>{
    setShowCart(true)
    setShowNotification(false)
}} >View Cart</button>
    </section>
}

export {Notifications}