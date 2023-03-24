import { AuthProvider } from "../../src/Assets/Context";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../Routes";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export { App };
