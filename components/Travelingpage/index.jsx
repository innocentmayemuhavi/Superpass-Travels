import { Link } from "react-router-dom";
import { Button } from "../Button/Index";
import { BookingCard } from "../Cards/BookingCard";
import { Footer } from "../footer/Footer";
import { Header } from "../Header/Header";
import ServiceData from "../SystemData/ServiceData";
import "./index.css";

const TravellingPage = () => {

    const filtered=ServiceData.filter(data=>data.category==='coach')
    const render=filtered.map(data=><BookingCard  key={data.id}  {...data}/>)
  return (
    <main
      style={{
        textAlign: "center",
      }}
      className="hire-page fade"
    >
      <Header />
      <h1> Travells Page Under Development</h1>
      <hr/>
      
<section className="car-booking-body">
    {render}

</section>
      <Link to={"/"}>
        <Button text="Back" type="button" />
      </Link>
      <Footer />
    </main>
  );
};
export default TravellingPage;
