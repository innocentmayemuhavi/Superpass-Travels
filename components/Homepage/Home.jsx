import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { Content } from "../PageContent";
import './index.css'
import { Welcome } from "../Welcome";
import { Slider } from "../Slider";

const Home = () => {
 

  return (
   <>
  
   <Header/>
   <Slider/>
      <Content/>
   <Footer/>
  </>
   
  );
};

export { Home };
