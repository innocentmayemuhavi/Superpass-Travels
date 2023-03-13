
import { useContext, useEffect } from "react";
import { AuthContext } from "../../src/Assets/Context";
import "./index.css"
const ServiceCardEl = (props) => {
  const { setShowBooking, setShowNotification, booked, setBooked } =
    useContext(AuthContext);

  const UpdatingBooked = (id, picture, name, description,price) => {
    setBooked({
        id: id,
        picture: picture,
        name: name,
        description: description,
        days: 1,
        amount: price,
      });
    setShowBooking(true);
    setShowNotification(false);
  };

  useEffect(() => {}, [booked]);
  return (
    <div
      className="service"
      onClick={() =>
        UpdatingBooked(props.id, props.picture, props.name, props.description,props.price)
      }
    >
     <div className="service-picture">
     <img src={props.picture} alt='Picture'/>
     </div>
     <div className="service-content">
     <p>
        Service: <span className="gray">{props.name}</span>
      </p>
      <p>
        Available: <span className="gray">{props.available}</span>
      </p>
      <p>
        Description: <span className="gray">{props.description}</span>
      </p>
      <p>
        Price/Day: <span className="gray">{props.price}</span>
      </p>
     </div>
    </div>
  );
};

export { ServiceCardEl };
