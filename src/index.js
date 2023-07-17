import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

//disables the react dev tools if this code run on prod server
if (process.env.NODE_ENV === "production") disableReactDevTools();
const root = ReactDOM.createRoot(document.getElementById("root"));

//Provider from "react-redux" to bind react with redux store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
