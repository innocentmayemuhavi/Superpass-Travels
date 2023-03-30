import { AuthContext } from "../../src/Assets/Context";
import React from "react";
import { useContext } from "react";
import { Notifications } from "../notification/Notification";
import { Account } from "../Account/Account";
import { useState, useEffect } from "react";
import "./index.css";
import { HeaderNav } from "../QuickNavigation/Headernav";
import { Phonenav } from "../QuickNavigation/PhoneNav";

const Header = () => {
  const {
    showNotification,
    showAccount,
    setShowaccount,
    showPhoneNav,
    setShowPhoneNav,
    setShowSliderButton,
  } = useContext(AuthContext);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  const windowwidth = window.innerWidth;
  return (
    <header
      style={{
        position: windowwidth > 1000 ? "static" : "fixed",
      }}
    >
      {showPhoneNav && windowwidth <= 1000 && <Phonenav />}
      <div className="header">
        {windowwidth > 1000 ? (
          <div className="logo">
            <img src="./images/sp-logo.jpg" />
          </div>
        ) : (
          <div
            className="phone-nav-icon"
            onClick={() => {
              setShowPhoneNav(true);
              setShowSliderButton(false);
            }}
          >
            <img src="../../../images/hamburger.png"></img>
          </div>
        )}

        <h3>SuperPass Travels</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              onClick={()=>setShowaccount(true)}
            >
              <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
            </svg>
          </div>
        </div>

        {showNotification && <Notifications />}
        {showAccount && <Account />}
      </div>
      {windowwidth > 1000 && <HeaderNav />}
    </header>
  );
};
export { Header };
