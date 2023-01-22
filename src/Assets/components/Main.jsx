import { createElement } from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import { App } from "./App";

const rootElement=document.getElementById("root")

const root=createRoot(rootElement)



const Main=()=>{
    return<>
  <App/>
    </>
}
root.render(<><Main/></>)