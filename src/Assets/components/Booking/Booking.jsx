import { useContext } from "react";
import { AuthContext } from "../../Context";

const Booking = (props) => {
  const {
    booked,
    setBooked,
    setShowBooking,
    setShowNotification,
    setNotification,
    Cart,
    setCart,
  } = useContext(AuthContext);
  const Saving = (id, picture, name, days) => {
    const Exists = Cart.cars.find((prev) => prev.id === booked.id);

    if (Exists) {
      console.log("its here");
      setNotification((prev) => {
        return (
          <p>
            you have already booked <b> {booked.name} </b> for{" "}
            <b>{booked.days}</b> day
            {booked.days > 1 ? "s" : ""}
          </p>
        );
      });
      setShowBooking(false);
      setShowNotification(true);
    } else {
      console.log("not here");
      const newOrder = Cart.cars;
      console.log(newOrder);
      newOrder.push(booked);
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
            You Have Booked <b> {booked.name}</b> for <b>{Cart.days}</b> day
            {booked.days > 1 ? "s" : ""} Succesfully
          </p>
        );
      });
      setShowBooking(false);
      setShowNotification(true);
    }
  };

  const SetDays = (event) => {
    const { name, value } = event.target;

    setBooked((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="dialog">
      <section className="dialog-content">
        <img src={booked.picture} />
        <p>
          Service:<span className="gray">{booked.name}</span>
        </p>
        <p>
          Description:<span className="gray">{booked.description}</span>
        </p>
        <label>Days:</label>
        <select value={booked.days} name="days" onChange={SetDays}>
          <option value={""}>Select Number Of Dayas</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </select>
        <div>
          <button
            onClick={() => {
              setShowBooking(false);
            }}
          >
            Cancel
          </button>
          <button onClick={() => Saving(booked)}>Book</button>
        </div>
      </section>
    </div>
  );
};

export { Booking };
