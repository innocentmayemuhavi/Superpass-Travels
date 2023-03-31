import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../src/Assets/Context";
import { Button } from "../Button/Index";
import { BookingCard } from "../Cards/BookingCard";
import { Footer } from "../footer/Footer";
import { Header } from "../Header/Header";
import Loading from "../Loading";
import ServiceData from "../SystemData/ServiceData";
import "./index.css";
import { useEffect } from "react";
const TravellingPage = () => {
  const { isLoading, setisLoading } = useContext(AuthContext);
  const filtered = ServiceData.filter((data) => data.category === "coach");
  const render = filtered.map((data) => (
    <BookingCard key={data.id} {...data} />
  ));

  useEffect(() => {
    if (document.readyState === "complete") {
      console.log("loaded");
      setInterval(() => setisLoading(false), 2000);
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
        <main
          style={{
            textAlign: "center",
          }}
          className="hire-page fade"
        >
          <Header />
          <h1> Travells Page Under Development</h1>
          <hr />

          <section className="car-booking-body">{render}</section>
          <Link to={"/"}>
            <Button text="Back" type="button" />
          </Link>
          <Footer />
        </main>
      )}
    </>
  );
};
export default TravellingPage;
