import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/global.scss";
import App from "./App";
import { CategoryContextProvider } from "./context/CategoryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoryContextProvider>
      <App />
    </CategoryContextProvider>
  </React.StrictMode>
);
