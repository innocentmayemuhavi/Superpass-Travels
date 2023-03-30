import { useState } from "react";
import { Button } from "../Button/Index";
import { Footer } from "../footer/Footer";
import { Header } from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelopeOpenText,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import {
  faFacebookF,
  faGoogle,
  faSkype,
  faTiktok,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const ContactPage = () => {
  const [message, setMessage] = useState([
    {
      name: "",
      email: "",
      subject: "",
      mainmessage: "",
    },
  ]);

  const handleChange = () => {
    const { name, value } = event.target;

    setMessage((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const Submit = () => {
    event.preventDefault();
    console.log(message);
  };

  return (
    <main className=" fade">
      <Header />
      <section className="contact-page-main">
        <div>
          <h2>Let's Chat.</h2>
          <h2>Tell Me about Your Experience With Our Companies.</h2>
          <p>Let's work on something togeteher👏</p>
          <div className="contact-page-contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
            </svg>
            <div>
              <p>Mail me at </p>
              <p>
                <a>irismaye@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="contact-icon-div">
            <div className="icon-div">
              {" "}
              <FontAwesomeIcon className="icon" icon={faPhoneVolume} />
            </div>
            <div className="icon-div">
              {" "}
              <FontAwesomeIcon className="icon" icon={faFacebookF} />
            </div>
            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faWhatsapp} />
            </div>
            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faGoogle} />
            </div>
            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </div>

            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faTiktok} />
            </div>
          </div>
        </div>
        <form className="contact-sec-2" onSubmit={Submit}>
          <h3>Send Us A Message🚀</h3>
          <div className="page-input1">
            <label>Name:</label>
            <input
              type={"text"}
              required={true}
              pattern={"[A-Za-z]{4,}"}
              name="name"
              onChange={handleChange}
            ></input>
          </div>
          <div className="page-input1">
            <label>Email Address:</label>
            <input
              type={"email"}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required={true}
              name="email"
              onChange={handleChange}
            ></input>
          </div>
          <div className="page-input1">
            <label>Subject:</label>
            <input type={"text"} name="subject" onChange={handleChange}></input>
          </div>
          <p>Message*</p>
          <textarea
            className="ta"
            placeholder="Tell Us Your Thoughts..."
            name="mainmessage"
            required={true}
            onChange={handleChange}
          ></textarea>
          <Button text="Send Message" />
        </form>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
