import React from "react";
import "../styles.css";
function Header(props) {
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
        {props.score}
      </div>
    </div>
  );
}

export default Header;
