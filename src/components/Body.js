import React from "react";
import "../App.css";
import "./Body.css";

function Body() {
  return (
    <div className="body-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <h1>YOUR TURN</h1>
      <p>What are you waiting for?</p>
      <div className="body-btns">
        <a href="http://localhost:3000" className="a-btn2">
            LET'S PLAY
        </a>
      </div>
    </div>
  );
}

export default Body;
