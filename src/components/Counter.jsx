import React from "react";
import Hand from "./Hand.jsx";

function Counter() {
  return (
    <div className="Counter">
      <Hand choice="paper" />
      <Hand choice="scissors" />
      <Hand choice="rock" />
    </div>
  );
}

export default Counter;
