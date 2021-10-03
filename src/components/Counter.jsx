import React from "react";
import Hand from "./Hand.jsx";

function Counter(props) {
  const handChoices = ["paper", "scissors", "rock"];
  const matchChoices = [
    { key: 1, pick: props.youPicked },
    { key: 2, pick: props.comPicked }
  ];
  function threeHands(handChoice) {
    return <Hand isPicked="false" user={props.picked} choice={handChoice} />;
  }
  function twoHands(handChoice) {
    return <Hand choice={handChoice.pick} isPicked={handChoice.key} />;
  }
  return (
    <div className="Counter">
      {props.youPicked === "none" && handChoices.map(threeHands)}
      {props.youPicked !== "none" && matchChoices.map(twoHands)}
    </div>
  );
}

export default Counter;
