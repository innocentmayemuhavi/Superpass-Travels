import Login from "../login";
import CarHirePage from "../CarHirePage";
import CarBookingPage from "../Travelingpage";
import { Home } from "../Homepage/Home";
import { Cart } from "../Cart/Cart";
import { Route, Routes } from "react-router-dom";

import BookingService from "../bookingservice";
import ContactPage from "../ContactPage";
import About from "../AboutPage";
import { SignUp } from "../signup";
import { WhatWeDo } from "../Whatwedo";
import { OurServices } from "../OurServices";
import { HireService} from "../HireService";
import { LisencePage } from "../lisence";
import { Checkout } from "../Checkout/Index";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/carhire" element={<CarHirePage />} />
      <Route path="/carbooking" element={<CarBookingPage />} />
      <Route path="/service" element={<HireService/>} />
      <Route path="/servicepage" element={<BookingService />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/whatwedo" element={<WhatWeDo />} />
      <Route path="/ourservices" element={<OurServices />} />
      <Route path="/lisenceverification" element={<LisencePage />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export { AppRoutes };
