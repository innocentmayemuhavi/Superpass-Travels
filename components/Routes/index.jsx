import Login from "../login";
import CarHirePage from "../CarHirePage";
import CarBookingPage from "../Travelingpage";
import { Home } from "../Homepage/Home";
import { Cart } from "../Cart/Cart";
import { Route, Routes } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/carhire" element={<CarHirePage />} />
      <Route path="/carbooking" element={<CarBookingPage />} />
    </Routes>
  );
};

export { AppRoutes };
