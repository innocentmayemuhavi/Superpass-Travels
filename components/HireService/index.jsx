import { useContext } from "react";
import { AuthContext } from "../../src/Assets/Context";
import "./index.css";
import * as React from "react";
import { Header } from "../Header/Header";
import { useNavigate } from "react-router-dom";

const HireService = (props) => {
  const {
    setShowNotification,
    setNotification,
    Cart,
    setCart,
    productData,
    setProductData,
    user,
  } = useContext(AuthContext);
  const systemDataUpdata = () => {
    setCart((prev) => {
      return {
        ...prev,
        cars: prev.cars,
        bookingsAmount: prev.bookings.reduce((prev, current) => {
          return prev + current.toBePaid;
        }, 0),
        hireAmount: prev.cars.reduce((prev, current) => {
          return prev + current.days * current.amount;
        }, 0),
        totalAmount: prev.hireAmount + prev.bookingsAmount,
      };
    });
  };
  const navigate = useNavigate();
  const Saving = (id) => {
    const Exists = Cart.cars.find((prev) => prev.id === id);
    systemDataUpdata();
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
      systemDataUpdata();
      setShowNotification(true);
    } else {
      console.log("not here");
      const newOrder = Cart.cars;
      console.log(newOrder);
      newOrder.push(productData);
      console.log(newOrder);
      if (user.isLicenseAuthenticated === true) {
        setCart((prev) => {
          return {
            ...prev,
            cars: newOrder,
            hireAmount: newOrder.reduce((prev, current) => {
              return prev + current.amount * current.days;
            }, 0),
          };
        });
      } else {
        navigate("/lisenceverification");
      }
      systemDataUpdata();
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
      systemDataUpdata();
      setShowNotification(true);
    }
    systemDataUpdata();
  };

  const SetDays = (event) => {
    const { name, value } = event.target;

    setProductData((prev) => {
      return { ...prev, [name]: value, user: user.email };
    });
  };
  console.log();
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
  );
};

export { HireService };
