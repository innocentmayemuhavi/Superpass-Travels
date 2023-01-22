import { Booking } from "./Booking";
import { useContext,useEffect } from "react";
import { AuthContext } from "../Context";

const ServiceCardEl = (props) => {
    const { showBooking, setShowBooking } = useContext(AuthContext);
    const{showNotification,setShowNotification}=useContext(AuthContext)
  const { booked, setBooked } = useContext(AuthContext);
 
  const UpdatingBooked = (id, picture, name, description) => {

   
    setBooked((prev) => {
      return {
        id: id,
        picture: picture,
        name: name,
        description: description,
        days:1
      };
    });
    setShowBooking(true)
    setShowNotification(false)

  };


  useEffect(()=>{
  
  },[booked])
  return (
    <div
      className="service"
      onClick={() =>
        UpdatingBooked(props.id, props.picture, props.name, props.description)
      }
    >
      <img src={props.picture} />
      <p>
        Service: <span className="gray">{props.name}</span>
      </p>
      <p>
        Available: <span className="gray">{props.available}</span>
      </p>
      <p>
        Description: <span className="gray">{props.description}</span>
      </p>
    </div>
  );
};

export { ServiceCardEl };
