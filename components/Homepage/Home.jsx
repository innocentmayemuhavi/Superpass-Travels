import React, { useContext, useEffect } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { Content } from "../PageContent";
import "./index.css";

import { Slider } from "../Slider";
import { Notifications } from "../notification/addedcarnotification";
import { AuthContext } from "../../src/Assets/Context";

const Home = () => {
  const {  showNotification,  } =
    useContext(AuthContext);
  return (
    <>
      <main className="fade">
        <Header />
        <Slider />
        <Content />
        <Footer />
        {showNotification && <Notifications />}
      </main>
    </>
  );
};

export { Home };
