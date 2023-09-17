import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../src/Assets/Context";
import { Button } from "../Button/Index";
import "./index.css";
const HeaderNav = () => {
  return (
    <section className="desktop-nav">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "linkActive" : "navigationlink")}
      >
        Home
      </NavLink>
      <NavLink
        to="/carbooking"
        className={({ isActive }) => (isActive ? "linkActive" : "navigationlink")}
      >
        Booking
      </NavLink>
      <NavLink
        to={"/carhire"}
        className={({ isActive }) => (isActive ? "linkActive" : "navigationlink")}
      >
        Car Hire
      </NavLink>
      <NavLink
        to={"/addingcar"}
        className={({ isActive }) => (isActive ? "linkActive" : "navigationlink")}
      >
      Add Car
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "linkActive" : "navigationlink")}
      >
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive ? "linkActive" : "navigationlink")}
      >
        Contact
      </NavLink>
    </section>
  );
};
export { HeaderNav };
