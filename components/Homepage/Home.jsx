import React, { useContext, useEffect } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { Content } from "../PageContent";
import "./index.css";

import { Slider } from "../Slider";
import { Welcome } from "../Welcome";
import { AuthContext } from "../../src/Assets/Context";
import Loading from "../Loading";

const Home = () => {
  const { isLoading, setisLoading } = useContext(AuthContext);

  useEffect(() => {
    if (document.readyState === "complete") {
      console.log("loaded");
      setInterval(()=>setisLoading(false),2000)
    } else {
      console.log("loading");
      setisLoading(true);
      window.addEventListener("load", console.log("loading"), false);

      return window.removeEventListener("load", console.log("loading"));
    }
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="fade">
          <Header />
          <Slider />
          <Content />
          <Footer />
        </main>
      )}
    </>
  );
};

export { Home };
