
import { AuthContext } from "../../src/Assets/Context"
import React, { useEffect } from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import './index.css'

const Notifications=()=>{


 
    const{Notification,setShowNotification,showNotification}=useContext(AuthContext)

    useEffect(()=>{

        setTimeout(()=>{
            setShowNotification(false)
        },4000)
    },[showNotification])
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