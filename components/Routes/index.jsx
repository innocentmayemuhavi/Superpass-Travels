import CarHirePage from "../CarHirePage";
import CarBookingPage from "../Travelingpage";
import { Home } from "../Homepage/Home";

import {
  Route,
  Routes,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";

import BookingService from "../bookingservice";
import ContactPage from "../ContactPage";
import About from "../AboutPage";

import { WhatWeDo } from "../Whatwedo";
import { OurServices } from "../OurServices";
import { HireService } from "../HireService";
import { LisencePage } from "../lisence";
import { Checkout } from "../Checkout/Index";
import { Receipt } from "../Receipt";
import AddingCars from "../AddingCar";
import { useContext } from "react";
import { FirebaseContext } from "../../src/Assets/Context/firebaseContext";
import Login from "../auth/login";
import { SignUp } from "../auth/signup";
import { ResetPassword } from "../auth/resetpassword";
import { Cart } from "../mycars/Cart";
import Loading from "../Loading";

const ProtectedRoute = ({ children }) => {
  const { user,isLoading } = useContext(FirebaseContext);

  if (user) {
    return children;
  } else {
    return isLoading?<Loading/>:<Navigate to="/login" replace />;
  }
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/mycars"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route path="/carhire" element={<CarHirePage />} />
      <Route path="/carbooking" element={<CarBookingPage />} />
      <Route
        path="/service"
        element={
          <ProtectedRoute>
            <HireService />
          </ProtectedRoute>
        }
      />
      <Route
        path="/servicepage"
        element={
          <ProtectedRoute>
            <BookingService />
          </ProtectedRoute>
        }
      />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/whatwedo" element={<WhatWeDo />} />
      <Route path="/ourservices" element={<OurServices />} />
      <Route
        path="/lisenceverification"
        element={
          <ProtectedRoute>
            <LisencePage />
          </ProtectedRoute>
        }
      />
      <Route path="/addingcar" element={<AddingCars />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/receipt"
        element={
          <ProtectedRoute>
            <Receipt />
          </ProtectedRoute>
        }
      />
      <Route
        path="/addingcar"
        element={
          <ProtectedRoute>
            <AddingCars />
          </ProtectedRoute>
        }
      />
      <Route path="/resetpassword" element={<ResetPassword />} />
    </Routes>
  );
};

export { AppRoutes };
