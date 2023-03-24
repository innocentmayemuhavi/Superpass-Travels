import { AuthContext } from "../../src/Assets/Context";
import "./index.css";
import { useContext } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { Link } from "react-router-dom";
import { Button } from "../Button/Index";
const Cart = () => {
  const { Cart, setCart } = useContext(AuthContext);
  const DeletingFromCart = (id) => {
    const fill = Cart.cars.filter((cars) => cars.id !== id);
    setCart((prev) => {
      return {
        ...prev,
        cars: fill,
        totalAmount: fill.reduce((prev, current) => {
          return prev + current.days * current.amount;
        }, 0),
      };
    });
  };
  const render = Cart.cars.map((data) => {
    return (
      <tr key={data.id}>
        <td>
          <img className="order-picture" src={data.picture}></img>
        </td>
        <td>{data.name}</td>
        <td>{data.days}</td>
        <td>{data.amount * data.days}</td>
        <td>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            onClick={() => DeletingFromCart(data.id)}
          >
            <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
          </svg>
        </td>
      </tr>
    );
  });

  return (
    <main className="fade">
      <Header />
      <section className="Cart  ">
        <p>Your Car Orders...</p>
        <p>Total Payout:.Ksh.{Cart.totalAmount.toLocaleString()}</p>
        <hr />
        <table>
          <thead>
            <th>Car Image</th>
            <th>Name</th>
            <th>Days</th>
            <th>Cost</th>
          </thead>

          <tbody>{render}</tbody>
        </table>
        <p>
          <b>Total Amount:.</b> Ksh. {Cart.totalAmount.toLocaleString()}
        </p>
        <Link to={"/"}>
          <Button text='Close Cart'/>
        </Link>
      </section>
      <Footer />
    </main>
  );
};

export { Cart };
