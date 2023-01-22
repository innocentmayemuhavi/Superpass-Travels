import { useContext } from "react";
import { AuthContext } from "../Context";

const Booking = (props) => {
  const { booked, setBooked } = useContext(AuthContext);
  const { showBooking, setShowBooking } = useContext(AuthContext);
  const { showNotification, setShowNotification } = useContext(AuthContext);
  const { Notification, setNotification } = useContext(AuthContext);
  let { data_from_server, setdata_from_server } = useContext(AuthContext);
  let { Cart, setCart } = useContext(AuthContext);
//adding comment
  if (data_from_server) {
    Cart = data_from_server;
  }

  const Saving = (id, picture, name, days) => {
    const Exists = data_from_server.some((prev) => prev.id === id);

    if (Exists) {
      console.log("its here");
      setNotification((prev) => {
        return (
          <p>
            you have already booked <b> {booked.name} </b> for <b>{booked.days}</b> day
            {data_from_server.days > 1 ? "s" : ""} 
          </p>
        );
      });
      setShowBooking(false)
      setShowNotification(true)
    
    }
   else {
      console.log("not here");
      Cart.push({
        id: id,
        picture: picture,
        name: name,
        days: days,
      });
      localStorage.setItem("Cart1", JSON.stringify(Cart));

      console.log(data_from_server);
      setNotification((prev) => {
        return (
          <p>
            You Have Booked <b> {booked.name}</b> for <b>{booked.days}</b> day
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
    <section className="booking">
      <img src={booked.picture} />
      <p>
        Service:<span className="gray">{booked.name}</span>
      </p>
      <p>
        Description:<span className="gray">{booked.description}</span>
      </p>
      <label>Days:</label>
      <select value={booked.days} name="days" onChange={SetDays}>
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
        <button
          onClick={() =>
            Saving(booked.id, booked.picture, booked.name, booked.days)
          }
        >
          Book
        </button>
      </div>
    </section>
  );
};

export { Booking };
