
import { AuthProvider} from "../Context";
import { Home } from "./Homepage/Home";
import { Cart } from "./Cart/Cart";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";

const App = () => {
  return  <AuthProvider>
<BrowserRouter>
<Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/cart" element={<Cart/>}/>

</Routes>
</BrowserRouter>
  </AuthProvider>
}


export { App };
