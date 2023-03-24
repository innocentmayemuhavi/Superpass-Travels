import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { Content } from "../PageContent";
import "./index.css";

import { Slider } from "../Slider";
import { Welcome } from "../Welcome";

const Home = () => {
  return (
    <main className="fade">
      <Header />
      <Slider />
      <Content />
      <Footer />
    </main>
  );
};

export { Home };
