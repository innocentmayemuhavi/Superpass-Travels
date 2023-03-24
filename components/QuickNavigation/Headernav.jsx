import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../src/Assets/Context";
import { Button } from "../Button/Index";
import "./index.css";
const HeaderNav = () => {
  const { tabnumber, settabnumber } = useContext(AuthContext);
  return (
    <section className="desktop-nav">
      <Link to={"/"}>
        <Button
          text="Home"
          onClick={() => settabnumber(1)}
          style={{
            transition: "0.8s",
            borderBottom: tabnumber == 1 && "2px solid black",
            backgroundColor: tabnumber == 1 && "#efefef",
          }}
        />
      </Link>
      <Link to="/carbooking">
        <Button
          text="Booking"
          onClick={() => settabnumber(2)}
          style={{
            transition: "0.8s",
            borderBottom: tabnumber == 2 && "2px solid black",
            backgroundColor: tabnumber == 2 && "#efefef",
          }}
        />
      </Link>
      <Link to={"/carhire"} onClick={() => settabnumber(3)}>
        <Button
          text="Car Hire"
          style={{
            transition: "0.8s",
            borderBottom: tabnumber == 3 && "2px solid black",
            backgroundColor: tabnumber == 3 && "#efefef",
          }}
        />
      </Link>
      <Link to={"/about"}>
        <Button
          text="About"
          onClick={() => settabnumber(4)}
          style={{
            transition: "0.8s",
            borderBottom: tabnumber == 4 && "2px solid black",
            backgroundColor: tabnumber == 4 && "#efefef",
          }}
        />
      </Link>
      <Link to={"/contact"}>
        <Button
          text="Contact"
          onClick={() => settabnumber(5)}
          style={{
            transition: "0.8s",
            borderBottom: tabnumber == 5 && "2px solid black",
            backgroundColor: tabnumber == 5 && "#efefef",
          }}
        />
      </Link>
    </section>
  );
};
export { HeaderNav };
