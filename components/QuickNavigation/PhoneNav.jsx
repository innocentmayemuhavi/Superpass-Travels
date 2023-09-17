import { useContext } from "react";
import "./index.css";
import { AuthContext } from "../../src/Assets/Context";
import { Link } from "react-router-dom";

const Phonenav = () => {
  const { setShowPhoneNav, setShowSliderButton } = useContext(AuthContext);
  return (
    <section className="phone-nav-overlay">
      <section className="phone-nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          onClick={() => {
            setShowPhoneNav(false);
            setShowSliderButton(true);
          }}
        >
          <path
            fill-rule="evenodd"
            d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"
          ></path>
        </svg>
        <h3>Super Pass Travels</h3>
        <hr></hr>
        <Link to={"/"} onClick={() => setShowPhoneNav(false)}>
          <li>Home</li>
        </Link>
        <hr />
        <Link to={"/carbooking"} onClick={() => setShowPhoneNav(false)}>
          <li>Car Booking</li>
        </Link>
        <hr />
        <Link to={"/carhire"} onClick={() => setShowPhoneNav(false)}>
          <li>Car Hire</li>
        </Link>
        <hr />
        <Link to={"/mycars"} onClick={() => setShowPhoneNav(false)}>
          <li>My Cars</li>
        </Link>
        <hr />
        <Link to={"/addingcar"} onClick={() => setShowPhoneNav(false)}>
          <li>Add Car</li>
        </Link>
        <hr />
        <Link to={"/about"} onClick={() => setShowPhoneNav(false)}>
          <li>About</li>
        </Link>
        <hr />
        <Link to={"/contact"} onClick={() => setShowPhoneNav(false)}>
          <li>Contact</li>
        </Link>
        <hr />
      </section>
    </section>
  );
};

export { Phonenav };
