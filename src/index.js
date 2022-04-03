import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Importar estilos
import "./assets/css/main.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
