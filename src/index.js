import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import SortVisualizer from "./components/Sort/SortVisualizer.jsx";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/SortVisualizer" element={<SortVisualizer />}></Route>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
