import { AuthContext } from "../Context";
import { useContext, useEffect } from "react";

const Account = () => {
  const { showAccount, setShowaccount } = useContext(AuthContext);
  const { user, setUser } = useContext(AuthContext);
  const { ShowCart, setShowCart } = useContext(AuthContext);
  const { data_from_server, setdata_from_server } = useContext(AuthContext);

  return (
    <section className="accountsection">
      <img
        src="./src/Assets/images/cancel.png"
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
      {data_from_server.length>0?  <div className="alert">{data_from_server.length}</div>:""}
        <img
          src="./src/Assets/images/cart.png"
          onClick={() => {
            setShowCart(true);
            setShowaccount(false);
          }}
        />
      </div>
    </section>
  );
};

export { Account };
