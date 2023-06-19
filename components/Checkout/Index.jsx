import { useContext, useState, useEffect } from "react";

import { Header } from "../Header/Header";
import "./index.css";
import { Pay_By_Card } from "./Pay_by_card";
import { Pay_By_Mpesa } from "./Pay_by_m_pesa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/Assets/Context";
import Loading from "../Loading";
import { FirebaseContext } from "../../src/Assets/Context/firebaseContext";
const Checkout = () => {
  const [showvisa, setshowvisa] = useState(true);
  const { isLoading, setisLoading } = useContext(AuthContext);
  const { user, Cart } = useContext(FirebaseContext);
  const navigate = useNavigate();
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

  const renderbooking = Cart.bookings.map((data) => {
    return (
      <tr key={data.id}>
        <td>
          <img className="order-picture" src={data.picture}></img>
        </td>
        <td>
          <Link to={"/servicepage"} onClick={() => setServiceData({ ...data })}>
            {data.name}
          </Link>
        </td>
        <td>{data.time}</td>
        <td>{Math.round(data.toBePaid).toLocaleString()}</td>
      </tr>
    );
  });

  const render = Cart.cars.map((data) => {
    return (
      <tr key={data.id}>
        <td>
          <img className="order-picture" src={data.picture}></img>
        </td>
        <td>
          <Link to={"/service"} onClick={() => setProductData({ ...data })}>
            {data.name}
          </Link>
        </td>
        <td>{data.drop_point}</td>
        <td>{data.pick_up}</td>
        <td>{data.days}</td>
        <td>{Math.round(data.amount * data.days).toLocaleString()}</td>
      </tr>
    );
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <Header />
          <div className="checkout-page">
            <button className="checkout-btn" onClick={() => navigate("/cart")}>
              Close Check-Out
            </button>

            <section className="checkout-modal">
              <p> Form Data Is Not Submitted App On Demo</p>
              <fieldset>
                <legend>Order Summary</legend>

                {Cart.cars.length > 0 && (
                  <>
                    <div>
                      <h5>Hired Cars</h5>

                      <div className="car-notice">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                        </svg>
                        <p> Car Will Be Picked and Returned To Drop Point</p>
                      </div>
                      <table>
                        <thead>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Drop point</th>
                          <th>Pick-Up Date</th>
                          <th>Days</th>
                          <th>Cost</th>
                        </thead>

                        <tbody>{render}</tbody>
                      </table>
                    </div>
                  </>
                )}
                {Cart.bookings.length > 0 && (
                  <>
                    <h5>Booked Cars</h5>
                    <table>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Cost</th>

                      <tbody> {renderbooking}</tbody>
                    </table>
                  </>
                )}
                {Cart.totalAmount > 0 ? (
                  <p>
                    Total:.Ksh.<b>{Cart.totalAmount.toLocaleString()}</b>
                  </p>
                ) : (
                  <p>Your Cart Is Empty!!</p>
                )}
              </fieldset>
              <fieldset className="deliverydata">
                <legend>User Details</legend>
                <section className="userdata">
                  <fieldset
                    style={{
                      padding: 4,
                      marginTop: 33,
                      marginBottom: 9,
                    }}
                  >
                    <legend>Customer Details And Address</legend>
                    <p>
                      User Name:<span className="grey">{user.displayName}</span>
                    </p>
                    <p>
                      {" "}
                      Email:<span className="grey">{user.email}</span>
                    </p>
                    <p>
                      {" "}
                      Phone:<span className="grey">{user.phone}</span>
                    </p>
                  </fieldset>
                  <div className="checkout-method-select">
                    <button
                      className={
                        showvisa ? "mobile-money active-btn" : "mobile-money"
                      }
                      onClick={() => setshowvisa(true)}
                    >
                      Visa
                    </button>
                    <button
                      className={showvisa ? "visa " : "visa active-btn"}
                      onClick={() => setshowvisa(false)}
                    >
                      Mobile Money
                    </button>
                  </div>
                </section>

                <section>
                  {showvisa ? <Pay_By_Card /> : <Pay_By_Mpesa />}
                </section>
              </fieldset>
            </section>
          </div>
        </main>
      )}
    </>
  );
};

export { Checkout };
