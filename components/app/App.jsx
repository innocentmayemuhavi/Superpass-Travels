
import { AuthProvider} from "../../src/Assets/Context";
import { Home } from "../Homepage/Home";
import {Cart} from'../Cart/Cart'
import'./index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login";
import BookingPage from "../BookingPage";
import TravellingPage from "../Travelingpage";

const App = () => {
  return  <AuthProvider>
<BrowserRouter>
<Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/booking" element={<BookingPage/>}/>
  <Route path="/travelling" element={<TravellingPage/>}/>

</Routes>
</BrowserRouter>
  </AuthProvider>
}


export { App };
