import { AuthContext } from "../../src/Assets/Context";
import "./index.css";
import { useContext } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { Link } from "react-router-dom";
import { Button } from "../Button/Index";
const Cart = () => {
  const { Cart, setCart, setProductData } = useContext(AuthContext);
  const systemDataUpdata = () => {
    setCart((prev) => {
      return {
        ...prev,
        cars: prev.cars,
        totalAmount: prev.cars.reduce((prev, current) => {
          return prev + current.days * current.amount;
        }, 0),
      };
    });
  };
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
  const Add = (id) => {
    setCart((prev) => {
      return {
        ...prev,
        cars: prev.cars.map((prev) => {
          return prev.id === id ? { ...prev, days: prev.days + 1 } : prev;
        }),
        totalAmount: prev.cars.reduce((prev, current) => {
          return prev + current.days * current.amount;
        }, 0),
      };
    });
    systemDataUpdata();
  };

  const Minus = (id) => {
    const fill = Cart.cars.filter((cars) => cars.id === id);
    console.log(fill);
    if (fill[0].days > 1) {
      setCart((prev) => {
        return {
          ...prev,
          cars: prev.cars.map((prev) => {
            return prev.id === id ? { ...prev, days: prev.days - 1 } : prev;
          }),
          totalAmount: prev.cars.reduce((prev, current) => {
            return prev + current.days * current.amount;
          }, 0),
        };
      });
    } else {
      DeletingFromCart(id);
    }
    systemDataUpdata();
  };

  const render = Cart.cars.map((data) => {
    return (
      <tr key={data.id}>
        <td>
          <img className="order-picture" src={data.picture}></img>
        </td>
        <td>
          <Link to={"/service"} onClick={() => setProductData({ ...data })}>
            {(data.name)}
          </Link>
        </td>
        <td>
          <button className="amt-operation" onClick={() => Minus(data.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path d="M2 7.75A.75.75 0 0 1 2.75 7h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 2 7.75Z"></path>
            </svg>
          </button>
          {data.days}
          <button className="amt-operation" onClick={() => Add(data.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
            </svg>
          </button>
        </td>
        <td>{Math.round(data.amount * data.days).toLocaleString()}</td>
        <td>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="24"
            height="24"
            onClick={() => DeletingFromCart(data.id)}
          >
            <path d="M2.344 2.343h-.001a8 8 0 0 1 11.314 11.314A8.002 8.002 0 0 1 .234 10.089a8 8 0 0 1 2.11-7.746Zm1.06 10.253a6.5 6.5 0 1 0 9.108-9.275 6.5 6.5 0 0 0-9.108 9.275ZM6.03 4.97 8 6.94l1.97-1.97a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l1.97 1.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-1.97 1.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L6.94 8 4.97 6.03a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018Z"></path>
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
          <Button text="Close Cart" />
        </Link>
      </section>
      <Footer />
    </main>
  );
};

export { Cart };
