
import { AuthProvider} from "../../src/Assets/Context";
import { Home } from "../Homepage/Home";
import {Cart} from'../Cart/Cart'
import'./index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login";
import CarHirePage from "../CarHirePage";
import CarBookingPage from "../Travelingpage";

const App = () => {
  return  <AuthProvider>
<BrowserRouter>
<Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/carhire" element={<CarHirePage/>}/>
  <Route path="/carbooking" element={<CarBookingPage/>}/>

</Routes>
</BrowserRouter>
  </AuthProvider>
}


export { App };
