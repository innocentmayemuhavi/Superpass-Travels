import { AuthContext } from "../../src/Assets/Context";
import { useContext} from "react";
import { Link } from "react-router-dom";
import "./index.css"
import { Button } from "../Button/Index";

const Account = () => {
  const { setShowaccount,Cart,user,isloggedin } = useContext(AuthContext);



  return (
    <section className="accountsection">
      <img
        src="./images/cancel.png"
        className="cancel"
        onClick={() => {
          setShowaccount(false);
        }}
      />
      <div className="user">
        <p>
          Name: <span className="gray">{user.name}.</span>
        </p>
        <p>
          Email: <span className="gray">{user.email}.</span>
        </p>
      </div>
      <div className="cartbtn">
      {<div className="alert">{Cart.cars.length+Cart.bookings.length}</div>}
      <Link to={'/cart'}> <img
      className="cartbtn"
          src="/images/cart.png"
        /></Link>
       
      </div> <Link to={'/login'}>
      <Button text={isloggedin?'Log Out':'Login'} class=''/>
        </Link>
    </section>
  );
};

export { Account };
