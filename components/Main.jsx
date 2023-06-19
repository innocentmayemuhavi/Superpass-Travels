
import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { FirebaseProvider } from "../src/Assets/Context/firebaseContext";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
const Main = () => {
  return (
    <>
      <App />
    </>
  );
};
root.render(
  <>
    <FirebaseProvider>
      <Main/>
    </FirebaseProvider>
  </>
);
