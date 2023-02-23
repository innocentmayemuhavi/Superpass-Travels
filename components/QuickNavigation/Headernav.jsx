import { Link } from "react-router-dom";
import { Button } from "../Button/Index";

const HeaderNav = () => {
  return (
    <main>
      <Link to={'/'}>
      <Button text="Home" /></Link>
   <Link to='/booking'>
    <Button text='Booking'/>
   </Link>
      <Button text="About" />
      <Button text="Contact" />
    </main>
  );
};
export {HeaderNav}
