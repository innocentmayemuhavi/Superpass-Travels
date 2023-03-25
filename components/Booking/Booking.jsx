import { useContext } from "react";
import { AuthContext } from "../../src/Assets/Context";
import "./index.css";
import * as React from "react";
import { Header } from "../Header/Header";
import { useNavigate } from "react-router-dom";

const Booking = (props) => {
  const {
    setShowNotification,
    setNotification,
    Cart,
    setCart,
    productData,
    setProductData,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const Saving = (id) => {
    const Exists = Cart.cars.find((prev) => prev.id === id);

    if (Exists) {
      let filll = Cart.cars.filter((data) => data.id === id);
      console.log(filll[0].id);
      console.log("its here");
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
      console.log("not here");
      const newOrder = Cart.cars;
      console.log(newOrder);
      newOrder.push(productData);
      console.log(newOrder);
      setCart((prev) => {
        return {
          ...prev,
          cars: newOrder,
          totalAmount: newOrder.reduce((prev, current) => {
            return prev + current.amount * current.days;
          }, 0),
        };
      });
      console.log(Cart);
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
      return { ...prev, [name]: value * 1 };
    });
  };

  return (
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
              <select value={productData.days} name="days" onChange={SetDays}>
                <option value={""}>Select Number Of Days</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </select>
            </div>
            <div className="product-buttons">
              <button onClick={() => navigate(-1)}>Cancel</button>
              <button onClick={() => Saving(productData.id)}>HIRE</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export { Booking };
