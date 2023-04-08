import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import {
  faFacebookF,
  faGoogle,
  faTiktok,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
const OurServices = () => {
  const navigation = useNavigate();
  return (
    <main className="fade">
      <Header />

      <section className="whatwedo">
        <div>
          <h2>Our Services</h2>
          <hr></hr>
          <p>We offer Automotive services in the whole of kenya .</p>
          <p>
            Currently we have two categories of services that is the{" "}
            <Link to={"/carbooking"}>Booking</Link> and{" "}
            <Link to={"/carhire"}>Car Hire</Link> services.
          </p>
          <div className="contact-icon-div">
            <div className="icon-div">
              {" "}
              <a href={`tel:${+254745933527}`}>
                <FontAwesomeIcon className="icon" icon={faPhoneVolume} />
              </a>
            </div>
            <div className="icon-div">
              {" "}
              <a href="https://www.facebook.com/iris.maye.10" target="_blank">
                <FontAwesomeIcon className="icon" icon={faFacebookF} />
              </a>
            </div>
            <div className="icon-div">
              <a
                href={`https://wa.me/+254745933527?text=${encodeURIComponent(
                  `Hello🖐️ I Have Checked Services Of Superpass Travels and i would like to be one of your customers thank you.`
                )}`}
                target="_blank"
              >
                <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              </a>
            </div>
            <div className="icon-div">
              <a target="_blank" href="https://superpass-fdeeb.web.app/">
                <FontAwesomeIcon className="icon" icon={faGoogle} />
              </a>
            </div>
            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </div>

            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faTiktok} />
            </div>
          </div>
        </div>
        <div className="card-container">
          <div
            style={{
              backgroundImage: `url(./images/taxi-in-the-rain-at-night-cologne-north-rhine-westphalia-germany-DWNMHR.jpg)`,
            }}
            className="card"
          >
            <div className="c-content">
              <button onClick={() => navigation("/carbooking")}>
                Car Booking
              </button>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(./images/automotive-industry-concept-new-cars-production-line-brand-new-vehicles-on-the-factory-lot-M9RB7R.jpg)`,
            }}
            className="card"
          >
            <div className="c-content">
              <button onClick={() => navigation("/carhire")}>Car Hire</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export { OurServices };
