import { AuthContext } from "../../src/Assets/Context";
import { useContext } from "react";

import "./index.css";
import { Button } from "../Button/Index";
import { FirebaseContext } from "../../src/Assets/Context/firebaseContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const { setShowaccount } = useContext(AuthContext);

  const { user, signout, Cart } = useContext(FirebaseContext);
  const setPage = async () => {
    try {
      await signout();
      navigate("/login");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <section className="accountsection ">
      <img
        src="./images/cancel.png"
        className="cancel"
        onClick={() => {
          setShowaccount(false);
        }}
      />
      {user && (
        <div className="user">
          <p>
            Name: <span className="gray">{user.displayName}.</span>
          </p>
          <p>
            Email: <span className="gray">{user.email}.</span>
          </p>
        </div>
      )}

      <div className="cartbtn">
        {user && (
          <div className="alert">{Cart.cars.length + Cart.bookings.length}</div>
        )}

        <img
          onClick={() => {
            navigate("/cart");
            setShowaccount(false);
          }}
          className="cartbtn"
          src="/images/cart.png"
        />
      </div>

      <Button text={user ? "Log Out" : "Log In"} onClick={setPage} class="" />
    </section>
  );
};

export { Account };
