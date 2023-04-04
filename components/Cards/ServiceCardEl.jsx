import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../src/Assets/Context";
import "./index.css";
const ServiceCardEl = (props) => {
  const { setProductData, isloggedin } = useContext(AuthContext);

  return (
    <div
      className="service"
      onClick={() =>
        setProductData({
          id: props.id,
          picture: props.picture,
          name: props.name,
          description: props.description,
          days: 1,
          amount: props.price,
        })
      }
    >
      <div className="service-picture">
        <Link to={isloggedin ? "/service" : "/login"}>
          <img src={props.picture} alt="Picture" />
        </Link>
      </div>
      <div className="service-content">
        <p>
          Service: <span className="gray">{props.name}</span>
        </p>
        <p>
          Available: <span className="gray">{props.available}</span>
        </p>
        <p>
          Description:{" "}
          <span className="gray">{props.description.slice(0, 17) + "..."}</span>
        </p>
        <p>
          Price/Day:{" "}
          <span className="gray">{props.price.toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
};

export { ServiceCardEl };
