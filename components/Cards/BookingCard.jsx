import { lazy, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/Assets/Context";

const BookingCard = (props) => {
  const navigate = useNavigate();
  const { setServiceData } = useContext(AuthContext);

  const updatedata = () => {
    setServiceData((prev) => {
      return {
        ...prev,
        from: "Kapsabet",
        to: "Mombasa",
        seat: "1a",
        time: "Morning: 07:00",
        cost: 3000,
        toBePaid: 3000 - 3000 * (prev.offer * 0.01),
      };
    });
  };

  return (
    <section
      className="booking-card"
      onClick={() => {
        setServiceData({ ...props });
        updatedata();
        navigate("/servicepage");
      }}
    >
      <div className="booking-card-image">
        <img src={props.picture} loading={lazy}></img>
      </div>

      <div className="booking-card-data">
        <h3>{props.name}</h3>
      </div>
    </section>
  );
};

export { BookingCard };
