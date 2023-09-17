import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/Assets/Context";
import { Notifications } from "../notification/Notification";

import "./index.css";
import { FirebaseContext } from "../../src/Assets/Context/firebaseContext";

const BookingService = () => {
  const {
    serviceData,
    setServiceData,
    setNotification,
    setShowNotification,
    showNotification,
  } = useContext(AuthContext);

  const { Cart, setCart } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const updatedata = (event, data) => {
    const { name, value } = event.target;

    if (data.to === value) {
      console.log("invalid");
    } else {
      if (data.from === value) {
        console.log("invalid");
      } else {
        setServiceData((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
      }
    }
  };

  const Book = async (id) => {
    const Exists = Cart.bookings.find((data) => data.id === id);

    if (Exists) {
      let filll = Cart.bookings.filter((data) => data.id === id);
      console.log(filll[0].id);
      console.log("its here");
      setNotification((prev) => {
        return (
          <p>
            You have already <strong>Booked</strong> <b> {filll[0].name} </b> at{" "}
            <b>{filll[0].from}</b> scheduled from <b>{filll[0].time}</b>
            {filll[0].days > 1 ? "s" : ""}
          </p>
        );
      });

      setShowNotification(true);
    } else {
      const newData = Cart.bookings.slice();
      newData.push(serviceData);
      const bookingsAmount = newData.reduce((prev, current) => {
        return prev + current.toBePaid;
      }, 0);

      await setCart((prev) => {
        return {
          ...prev,
          cars: prev.cars,
          bookings: newData,
          bookingsAmount: bookingsAmount,
          totalAmount: bookingsAmount + prev.hireAmount,
        };
      });
      let filll = newData.filter((data) => data.id === id);
      setNotification((prev) => {
        return (
          <p>
            You have <strong>Booked</strong> <b> {filll[0].name} </b> at{" "}
            <b>{filll[0].from}</b> scheduled from <b>{filll[0].time}</b>
          </p>
        );
      });
      setShowNotification(true);
    }
  };
  return (
    <main className="service-page">
      <div></div>
      {showNotification && <Notifications />}
      <div className="service-page-header">
        <div>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            onClick={() => navigate(-1)}
          >
            <path d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"></path>
          </svg>
        </div>
        <div className="trips-tag">
          <p>{serviceData.trips} Trip(s)/Day</p>
        </div>
      </div>
      <div className="service-page-section">
        <div className="service-page-image">
          <img src={serviceData.picture}></img>
          <div className="offer-tag">
            <p>{serviceData.offer} % OFF</p>
          </div>
        </div>
        <div className="service-page-data">
          <div className="c-d">
            <h3>Bus Name: {serviceData.name}</h3>
            <h3>
              Price:<span>{Math.round(serviceData.cost).toLocaleString()}</span>{" "}
              <p>
                Now:
                {Math.round(
                  serviceData.cost -
                    serviceData.cost * (serviceData.offer * 0.01)
                ).toLocaleString()}
              </p>
            </h3>
          </div>
          <div className="page-input">
            <label>From:</label>
            <select
              value={serviceData.from}
              onChange={() => updatedata(event, { ...serviceData })}
              name="from"
            >
              <option>Kapsabet</option>
              <option>Nairobi</option>
              <option>Mombasa</option>
            </select>
          </div>

          <div className="page-input">
            <label>To:</label>
            <select
              value={serviceData.to}
              onChange={() => updatedata(event, { ...serviceData })}
              name="to"
            >
              <option>Kapsabet</option>
              <option>Nairobi</option>
              <option>Mombasa</option>
            </select>
          </div>
          <div className="page-input">
            <label>Seat:</label>
            <select
              value={serviceData.seat}
              onChange={() => updatedata(event, { ...serviceData })}
              name="seat"
            >
              <option value={"1a"}>1a</option>
              <option value={"1b"}>1b</option>
              <option value={"1c"}>1c</option>
              <option value={"1d"}>1d</option>

              <option value={"2a"}>2a</option>
              <option value={"2b"}>2b</option>
              <option value={"2c"}>2c</option>
              <option value={"2d"}>2d</option>

              <option value={"3a"}>3a</option>
              <option value={"3b"}>3b</option>
              <option value={"3c"}>3c</option>
              <option value={"3d"}>3d</option>

              <option value={"3a"}>3a</option>
              <option value={"3b"}>3b</option>
              <option value={"3c"}>3c</option>
              <option value={"3d"}>3d</option>

              <option value={"4a"}>4a</option>
              <option value={"4b"}>4b</option>
              <option value={"4c"}>4c</option>
              <option value={"4d"}>4d</option>

              <option value={"5a"}>5a</option>
              <option value={"5b"}>5b</option>
              <option value={"5c"}>5c</option>
              <option value={"5d"}>5d</option>

              <option value={"6a"}>6a</option>
              <option value={"6b"}>6b</option>
              <option value={"6c"}>6c</option>
              <option value={"6d"}>6d</option>

              <option value={"7a"}>7a</option>
              <option value={"7b"}>7b</option>
              <option value={"7c"}>7c</option>
              <option value={"7d"}>7d</option>

              <option value={"8a"}>8a</option>
              <option value={"8b"}>8b</option>
              <option value={"8c"}>8c</option>
              <option value={"8d"}>8d</option>

              <option value={"9a"}>9a</option>
              <option value={"9b"}>9b</option>
              <option value={"9c"}>9c</option>
              <option value={"9d"}>9d</option>
            </select>
          </div>
          <div className="page-input">
            <label>Time:</label>
            <select
              value={serviceData.time}
              name="time"
              onChange={() => updatedata(event, { ...serviceData })}
            >
              <option>Morning: 07:00</option>
              {serviceData.trips === 3 && <option>AfterNoon: 12:00</option>}
              <option>Evening: 19:00</option>
            </select>
          </div>
          <div className="book-btn">
            <button onClick={() => navigate(-1)}>Cancel</button>
            <button onClick={() => Book(serviceData.id)}>Book</button>
          </div>
        </div>
        <div className="card_footer"></div>
      </div>
    </main>
  );
};

export default BookingService;
