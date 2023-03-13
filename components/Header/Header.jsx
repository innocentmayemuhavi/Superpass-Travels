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
  const { showNotification, showAccount, setShowaccount,showPhoneNav,setShowPhoneNav,setShowSliderButton } =
    useContext(AuthContext);
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
    <header style={{
      position:windowwidth>1000?'static':'fixed'
    }}>
       {showPhoneNav&& windowwidth<=1000&&<Phonenav/>}
      <div className="header">
        {windowwidth > 1000 ? (
          <div className="logo">
            <img src="./images/sp-logo.jpg" />
          </div>
        ) : (
          <div className="phone-nav-icon" onClick={()=>{
            setShowPhoneNav(true)
            setShowSliderButton(false)
          }}>
            <img src="../../../images/hamburger.png" ></img>
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
            <img
              src="./images/Account.jpeg"
              onClick={() => {
                setShowaccount(true);
              }}
            />
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
