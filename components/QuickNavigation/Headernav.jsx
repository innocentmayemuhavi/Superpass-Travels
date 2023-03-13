import { Link } from "react-router-dom";
import { Button } from "../Button/Index";
import "./index.css";
const HeaderNav = () => {
  return (
    <section className="desktop-nav">
      <Link to={"/"}>
        <Button text="Home" />
      </Link>
      <Link to="/booking">
        <Button text="Booking" />
      </Link>
      <Link to={'/travelling'}>
        <Button text="Car Hire" />
      </Link>
      <Link to={'/about'}>
        <Button text="About" />
      </Link>
      <Link to={'/contact'}>
        <Button text="Contact" />
      </Link>
    </section>
  );
};
export { HeaderNav };
