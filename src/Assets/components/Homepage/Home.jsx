import { AuthContext } from "../../Context";
import { ServiceCardEl } from "../Cards/ServiceCardEl";
import React from "react";
import { Booking } from "../Booking/Booking";
import { Cart } from "../Cart/Cart";
import { useContext, useEffect } from "react";
import ServiceData from "../SystemData/ServiceData";
import { Header } from "../Header/Header";

const Home = () => {
  const { showBooking, setShowBooking } = useContext(AuthContext);
  const render = ServiceData.map((service) => {
    return <ServiceCardEl key={service.id} {...service} />;
  });

  return (
   <>
   <Header/>
      <h4>Welcome</h4>
      <hr />
      <section className="services">{render}</section>
    <center>{showBooking&&<Booking/>}</center> 
   
  </>
   
  );
};

export { Home };
