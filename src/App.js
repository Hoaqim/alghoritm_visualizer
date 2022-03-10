import React, { useEffect } from "react";
import "./components/css/main.css";
import $ from "jquery";
import { Link } from "react-router-dom";

export default function App() {
  useEffect(() => {
    $(".btn").on("mouseover", function () {
      var offset = $(this).offset();
      var goX = Math.random() < 0.5 ? -1 : 1;
      var goY = Math.random() < 0.5 ? -1 : 1;
      $(this).css("top", offset.top + 20 * goY);
      $(this).css("left", offset.left + 20 * goX);
    });
  });

  return (
    <div className="container">
      <Link to="/SortVisualizer">
        <button className="btn btn-sort">Sort Visulizer</button>
      </Link>
      <button className="btn btn-pathfinder runner">
        Pathfinding Visualizer
      </button>
    </div>
  );
}
