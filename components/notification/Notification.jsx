
import { AuthContext } from "../../src/Assets/Context"
import React from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import './index.css'

const Notifications=()=>{
    const{Notification,setShowNotification}=useContext(AuthContext)
    return<section className="notification">
        <img  src="./images/cancel.png"  onClick={()=>{
            setShowNotification(false)
        }}/>
{Notification}
<Link to={'/cart'}>
<button onClick={()=>{
setShowNotification(false)
}} >View Cart</button>
</Link>
    </section>
}

export {Notifications}