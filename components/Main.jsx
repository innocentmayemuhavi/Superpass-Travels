
import { createRoot } from "react-dom/client";
import { App } from "./app/App";

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
    <Main />
  </>
);
