import { useContext } from "react";
import { AuthContext } from "../../src/Assets/Context";
import "./index.css";
import * as React from "react";
import { Header } from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../src/Assets/Context/firebaseContext";
import Loading from "../Loading";
const HireService = () => {
  const navigate = useNavigate();
  const { setShowNotification, setNotification, productData, setProductData } =
    useContext(AuthContext);

  const { Cart, setCart, user, isLoading } = useContext(FirebaseContext);
  const currentDate = new Date().toISOString().split("T")[0];

  const Saving = async (id) => {
    const Exists = Cart.cars.find((prev) => prev.id === id);

    if (Exists) {
      let filll = Cart.cars.filter((data) => data.id === id);
      console.log(filll[0].id);

      setNotification((prev) => {
        return (
          <p>
            You have already <strong>Hired</strong> <b> {filll[0].name} </b> for{" "}
            <b>{filll[0].days}</b> day
            {filll[0].days > 1 ? "s" : ""}
          </p>
        );
      });

      setShowNotification(true);
    } else {
      const newOrder = Cart.cars.slice();

      newOrder.push(productData);
      const hireAmount = newOrder.reduce((prev, current) => {
        return prev + current.amount * current.days;
      }, 0);

      if (user.isLisenceAuthenticated) {
        await setCart((prev) => {
          return {
            ...prev,
            cars: newOrder,
            hireAmount: hireAmount,
            totalAmount: hireAmount + prev.bookingsAmount,
          };
        });
      } else {
        navigate("/lisenceverification");
      }

      setNotification((prev) => {
        return (
          <p>
            You Have Hired <b> {productData.name}</b> for{" "}
            <b>{productData.days}</b> day
            {productData.days > 1 ? "s" : ""} Succesfully
          </p>
        );
      });

      setShowNotification(true);
    }
  };

  const SetDays = (event) => {
    const { name, value } = event.target;

    setProductData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" product fade">
          <Header />
          <div className="product-body">
            <div className="product-image">
              {" "}
              <img src={productData.picture} />
            </div>

            <section className="product-content">
              <div className="booking-content">
                <p>
                  Service:<span className="gray">{productData.name}</span>
                </p>
                <p>
                  Description:
                  <span className="gray">{productData.description}</span>
                </p>
                <p>Price/Day:{productData.amount}</p>
                <div className="page-input">
                  {" "}
                  <label>Days:</label>
                  <select
                    value={productData.days}
                    name="days"
                    onChange={SetDays}
                  >
                    <option value={""}>Select Number Of Days</option>
                    <option value={1 * 1}>1</option>
                    <option value={2 * 1}>2</option>
                    <option value={3 * 1}>3</option>
                    <option value={4 * 1}>4</option>
                    <option value={5 * 1}>5</option>
                    <option value={6 * 1}>6</option>
                    <option value={7 * 1}>7</option>
                  </select>
                </div>
                <div className="page-input">
                  {" "}
                  <label>Drop-Point:</label>
                  <select
                    value={productData.drop_point}
                    name="drop_point"
                    onChange={SetDays}
                  >
                    <option value={""}>Select Drop Point</option>
                    <option value={"Kencom Point"}>Kencom Point</option>
                    <option value={"The Hub-Karen"}>The Hub-Karen</option>
                    <option value={"Kapsabet-The Office"}>
                      Kapsabet-The Office
                    </option>
                    <option value={"Kisumu-Office"}>Kisumu-Office</option>
                    <option value={"Eldoret-Point"}>Eldoret-Point</option>
                    <option value={"Thika Arcade"}>Thika Arcade</option>
                    <option value={"Moi University-Point"}>
                      Moi University-Point
                    </option>
                    <option value={"Eldoret-Point"}>Eldoret-Point</option>
                    <option value={"South-B"}>South-B</option>
                    <option value={"Lesoss"}>Lesoss</option>
                    <option value={"Eldoret-Point"}>Eldoret-Point</option>
                    <option value={"Nakuru-near Green Garden"}>
                      Nakuru-near Green Garden
                    </option>
                    <option value={"Hill-View"}>Hill-View</option>
                  </select>
                </div>
                <div className="page-input">
                  <label>Pick Up Date:</label>
                  <input
                    type="date"
                    name="pick_up"
                    value={productData.pick_up}
                    onChange={SetDays}
                    min={currentDate}
                  />
                </div>
                <div className="product-buttons">
                  <button onClick={() => navigate(-1)}>Cancel</button>
                  <button onClick={() => Saving(productData.id)}>HIRE</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export { HireService };
