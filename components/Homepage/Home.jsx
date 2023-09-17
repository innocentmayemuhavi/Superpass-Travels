import React, { useContext, useEffect } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { Content } from "../PageContent";
import "./index.css";

import { Slider } from "../Slider";
import { Welcome } from "../Welcome";
import { AuthContext } from "../../src/Assets/Context";
import Loading from "../Loading";
import { FirebaseContext } from "../../src/Assets/Context/firebaseContext";

const Home = () => {
  const { isLoading } = useContext(FirebaseContext);

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
