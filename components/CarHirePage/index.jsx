import ServiceData from "../SystemData/ServiceData";
import { ServiceCardEl } from "../Cards/ServiceCardEl";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../src/Assets/Context";

import { Button } from "../Button/Index";
import { Link } from "react-router-dom";
import React from "react";
import "./index.css";
import { useEffect } from "react";
import Loading from "../Loading";
import { FirebaseContext } from "../../src/Assets/Context/firebaseContext";
const CarHirePage = () => {
  const { searchval, setSearchval } = useContext(AuthContext);
  const { cars } = useContext(FirebaseContext);

  const [number, setnumber] = useState(0);
  const filltered = Object.values(cars).filter((data) =>
    data.category
      .toLocaleLowerCase()
      .includes(`${searchval.toLocaleLowerCase()}`)
  );
  const render = filltered.map((data) => (
    <ServiceCardEl key={data.id} {...data} />
  ));

  return (
    <>
      <main className="fade">
        <Header />
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Car Hiring Services
        </h1>
        <hr></hr>
        <div
          style={{
            textAlign: "center",
            margin: 10,
          }}
        >
          <button
            onClick={() => {
              setnumber(0);
              setSearchval("");
            }}
            style={{
              color: number === 0 && "green",
              fill: number === 0 && "green",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="12"
            >
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>{" "}
            All
          </button>
          <button
            onClick={() => {
              setnumber(1);
              setSearchval("coach");
            }}
            style={{
              color: number === 1 && "green",
              fill: number === 1 && "green",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="12"
            >
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>{" "}
            Coach
          </button>
          <button
            onClick={() => {
              setnumber(2);
              setSearchval("bike");
            }}
            style={{
              color: number === 2 && "green",
              fill: number === 2 && "green",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="12"
            >
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>{" "}
            Motor-cycle
          </button>
          <button
            onClick={() => {
              setnumber(3);
              setSearchval("vintage");
            }}
            style={{
              color: number === 3 && "green",
              fill: number === 3 && "green",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="12"
            >
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>{" "}
            vintage
          </button>
          <button
            onClick={() => {
              setnumber(4);
              setSearchval("van");
            }}
            style={{
              color: number === 4 && "green",
              fill: number === 4 && "green",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="12"
            >
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>{" "}
            Vans
          </button>
          <button
            onClick={() => {
              setnumber(5);
              setSearchval("transist");
            }}
            style={{
              color: number === 5 && "green",
              fill: number === 5 && "green",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="12"
            >
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>{" "}
            transist
          </button>
          <button
            onClick={() => {
              setnumber(6);
              setSearchval("caravan");
            }}
            style={{
              color: number === 6 && "green",
              fill: number === 6 && "green",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="12"
            >
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>{" "}
            CARAVANS
          </button>
        </div>
        {filltered.length < 1 ? (
          <div className="center"> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="30"
              height="30"
              className="rotate"
            >
              <path d="M14.307 11.655a.75.75 0 0 1 .165 1.048 8.05 8.05 0 0 1-1.769 1.77.75.75 0 0 1-.883-1.214 6.552 6.552 0 0 0 1.44-1.439.75.75 0 0 1 1.047-.165Zm-2.652-9.962a.75.75 0 0 1 1.048-.165 8.05 8.05 0 0 1 1.77 1.769.75.75 0 0 1-1.214.883 6.552 6.552 0 0 0-1.439-1.44.75.75 0 0 1-.165-1.047ZM6.749.097a8.074 8.074 0 0 1 2.502 0 .75.75 0 1 1-.233 1.482 6.558 6.558 0 0 0-2.036 0A.751.751 0 0 1 6.749.097ZM.955 6.125a.75.75 0 0 1 .624.857 6.558 6.558 0 0 0 0 2.036.75.75 0 1 1-1.482.233 8.074 8.074 0 0 1 0-2.502.75.75 0 0 1 .858-.624Zm14.09 0a.75.75 0 0 1 .858.624c.13.829.13 1.673 0 2.502a.75.75 0 1 1-1.482-.233 6.558 6.558 0 0 0 0-2.036.75.75 0 0 1 .624-.857Zm-8.92 8.92a.75.75 0 0 1 .857-.624 6.558 6.558 0 0 0 2.036 0 .75.75 0 1 1 .233 1.482c-.829.13-1.673.13-2.502 0a.75.75 0 0 1-.624-.858Zm-4.432-3.39a.75.75 0 0 1 1.048.165 6.552 6.552 0 0 0 1.439 1.44.751.751 0 0 1-.883 1.212 8.05 8.05 0 0 1-1.77-1.769.75.75 0 0 1 .166-1.048Zm2.652-9.962A.75.75 0 0 1 4.18 2.74a6.556 6.556 0 0 0-1.44 1.44.751.751 0 0 1-1.212-.883 8.05 8.05 0 0 1 1.769-1.77.75.75 0 0 1 1.048.166Z"></path>
            </svg>
          </div>
        ) : (
          <section className="services">{render}</section>
        )}
        <Link to={"/"}>
          <Button text="Back" type="button" />
        </Link>
        <Footer />
      </main>
    </>
  );
};
export default CarHirePage;
