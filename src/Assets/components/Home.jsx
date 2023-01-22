import { AuthContext } from "../Context";
import { ServiceCardEl } from "./ServiceCardEl";
import React from "react";
import { Booking } from "./Booking";
import { Cart } from "./Cart";
import { useContext, useEffect } from "react";
import ServiceData from "./ServiceData";

const Home = () => {
  const { showBooking, setShowBooking } = useContext(AuthContext);
  const {ShowCart,setShowCart}=useContext(AuthContext)

  const render = ServiceData.map((service) => {
    return <ServiceCardEl key={service.id} {...service} />;
  });

  return (<>{ShowCart?<Cart/>:
   <>
      <h4>Welcome</h4>
      <hr />
      <section className="services">{render}</section>
    <center>{showBooking&&<Booking/>}</center> 
    </>}
  </>
   
  );
};

export { Home };
