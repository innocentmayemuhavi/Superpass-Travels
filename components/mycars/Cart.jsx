import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/Assets/Context";
import { FirebaseContext } from "../../src/Assets/Context/firebaseContext";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { Button } from "../Button/Index";
import Loading from "../Loading";
import "./index.css";

const Cart = () => {
  const { setProductData, isLoading, setisLoading, setServiceData } =
    useContext(AuthContext);
  const { Cart, setCart } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const systemDataUpdate = async () => {
    await setCart((prev) => {
      const bookingsAmount = prev.bookings.reduce((prev, current) => {
        return prev + current.toBePaid;
      }, 0);
      const hireAmount = prev.cars.reduce((prev, current) => {
        return prev + current.days * current.amount;
      }, 0);

      return {
        ...prev,
        bookingsAmount,
        hireAmount,
        totalAmount: hireAmount + bookingsAmount,
      };
    });
  };

  const DeletingFromCart = async (id) => {
    const updatedCars = Cart.cars.filter((car) => car.id !== id);

    const bookingsAmount = Cart.bookings.reduce((prev, current) => {
      return prev + current.toBePaid;
    }, 0);

    const hireAmount = updatedCars.reduce((prev, current) => {
      return prev + current.days * current.amount;
    }, 0);

    const updatedCart = {
      ...Cart,
      cars: updatedCars,
      bookingsAmount,
      hireAmount,
      totalAmount: hireAmount + bookingsAmount,
    };

    await setCart(updatedCart);

    await systemDataUpdate();
  };

  const DeletingFromBooking = async (id) => {
    const fill = Cart.bookings.filter((cars) => cars.id !== id);
    await setCart((prev) => {
      return {
        cars: prev.cars,
        bookings: fill,
        bookingsAmount: fill.reduce((prev, current) => {
          return prev + current.toBePaid;
        }, 0),
        hireAmount: prev.cars.reduce((prev, current) => {
          return prev + current.days * current.amount;
        }, 0),
        totalAmount: prev.hireAmount + prev.bookingsAmount,
      };
    });

    await systemDataUpdate();
  };

  const Add = async (id) => {
    const fill = Cart.cars.filter((cars) => cars.id === id);
    if (fill[0].days <= 6) {
      await setCart((prev) => {
        const bookingsAmount = prev.bookings.reduce((prev, current) => {
          return prev + current.toBePaid;
        }, 0);
        const hireAmount = prev.cars.reduce((prev, current) => {
          return prev + current.days * current.amount;
        }, 0);

        return {
          ...prev,
          cars: prev.cars.map((prev) => {
            return prev.id === id ? { ...prev, days: prev.days * 1 + 1 } : prev;
          }),
          bookingsAmount,
          hireAmount,
          totalAmount: hireAmount + bookingsAmount,
        };
      });
    }
    await systemDataUpdate();
  };

  const Minus = async (id) => {
    const fill = Cart.cars.filter((cars) => cars.id === id);
    console.log(fill);
    if (fill[0].days > 1) {
      await setCart((prev) => {
        return {
          ...prev,
          cars: prev.cars.map((prev) => {
            return prev.id === id ? { ...prev, days: prev.days * 1 - 1 } : prev;
          }),
          hireAmount: prev.cars.reduce((prev, current) => {
            return prev + current.days * current.amount;
          }, 0),
          bookingsAmount: prev.bookings.reduce((prev, current) => {
            return prev + current.toBePaid;
          }, 0),
          totalAmount: prev.hireAmount + prev.bookingsAmount,
        };
      });
    } else {
      await DeletingFromCart(id);
    }
    await systemDataUpdate();
  };

  const render = Cart.cars.map((data) => {
    return (
      <tr key={data.id}>
        <td>
          <img className="order-picture" src={data.picture}></img>
        </td>
        <td>
          <a>
            <p
              onClick={() => {
                setProductData({ ...data });
                navigate("/service");
              }}
            >
              {data.name}
            </p>
          </a>
        </td>

        <td>{data.drop_point}</td>
        <td>{data.pick_up}</td>
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
          <button
            className={
              data.days <= 6 ? "amt-operation" : "amt-operation inactive"
            }
            onClick={() => Add(data.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="sf"
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

  const renderbooking = Cart.bookings.map((data) => {
    return (
      <tr key={data.id}>
        <td>
          <img className="order-picture" src={data.picture}></img>
        </td>
        <td>
          <a
            onClick={() => {
              setServiceData({ ...data });
              navigate("/servicepage");
            }}
          >
            {data.name}
          </a>
        </td>
        <td>{data.time}</td>
        <td>{data.from}</td>
        <td>{data.to}</td>
        <td>{Math.round(data.toBePaid).toLocaleString()}</td>
        <td>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="24"
            height="24"
            onClick={() => DeletingFromBooking(data.id)}
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
        <div className="cart-header">
          {" "}
          <p>My Cars</p>
          <p>( {Cart.bookings.length + Cart.cars.length} item(s) )</p>
        </div>

        <hr />
        {Cart.cars.length > 0 && (
          <div className="hire-cart">
            <h2>Hired Cars</h2>

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
                <th>Car Image</th>
                <th>Name</th>
                <th>Drop point</th>
                <th>Pick-Up Date</th>
                <th>Days</th>
                <th>Cost</th>
              </thead>

              <tbody>{render}</tbody>
            </table>
            <p>
              <b>Payout Amount:.</b> Ksh. {Cart.hireAmount.toLocaleString()}
            </p>
          </div>
        )}
        {Cart.bookings.length > 0 && (
          <div className="booking-cart">
            <h2>Booked Cars</h2>
            <table>
              <thead>
                <th>Car Image</th>
                <th>Name</th>
                <th>Time</th>
                <th>From</th>
                <th>To</th>
                <th>Cost</th>
              </thead>

              <tbody>{renderbooking}</tbody>
            </table>
            <p>
              <b>Payout Amount:.</b> Ksh. {Cart.bookingsAmount.toLocaleString()}
            </p>
          </div>
        )}
        <div className="c-footer">
          {Cart.totalAmount > 0 && (
            <p>
              <b>Total Amount:.</b> Ksh.{" "}
              {Math.round(Cart.totalAmount).toLocaleString()}
            </p>
          )}
          <div>
            <Button
              text={Cart.totalAmount > 0 ? "Close Cart" : "Hire/Book Cars"}
              onClick={() => navigate("/")}
            />
            <Button text="Checkout" onClick={() => navigate("/checkout")} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export { Cart };
