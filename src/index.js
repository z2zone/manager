import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

//Grab the root component
const root = document.getElementById("root");
//Create react root
const ReactRoot = ReactDOM.createRoot(root);
//Render it
ReactRoot.render(<App />);
