import React from "react";
import "../styles.css";
function Header() {
  return (
    <div className="Header">
      <div className="title">
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
      </div>
      <div className="score-card">
        <span>SCORE</span>
        <br />
        12
      </div>
    </div>
  );
}

export default Header;
