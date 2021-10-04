import "../styles.css";
import Header from "./Header.jsx";
import Counter from "./Counter";
import Rules from "./Rules";
import mySvG from "./images/bg-triangle.svg";
import { useState } from "react";
import Chart from "./Chart.jsx";
import Message from "./Message";

export default function App() {
  const [rulepage, pagevalue] = useState(0);
  const [youPicked, updatePicked] = useState("none");
  const [comPicked, updateCom] = useState("none");
  const [result, resultUpdate] = useState("WON");
  const [score, updateScore] = useState(0);
  function picked(event) {
    const userPicked = event.target.className;
    updatePicked(userPicked);
    let com = Math.floor(Math.random() * 3);
    if (com === 0) {
      updateCom("paper");
      if (userPicked === "paper") resultUpdate("DRAW");
      else if (userPicked === "rock") resultUpdate("YOU LOSE");
      else {
        resultUpdate("YOU WON");
        updateScore(score + 1);
      }
    } else if (com === 1) {
      updateCom("scissors");
      if (userPicked === "paper") resultUpdate("YOU LOSE");
      else if (userPicked === "rock") {
        resultUpdate("YOU WON");
        updateScore(score + 1);
      } else resultUpdate("DRAW");
    } else {
      updateCom("rock");
      if (userPicked === "paper") {
        resultUpdate("YOU WON");
        updateScore(score + 1);
      } else if (userPicked === "rock") resultUpdate("DRAW");
      else resultUpdate("YOU LOSE");
    }
  }
  function backgroundTriangle() {
    return { backgroundImage: `url(${mySvG}` };
  }
  function rulesRender() {
    let val = rulepage ? 0 : 1;
    pagevalue(val);
  }
  return (
    <div
      className="App"
      style={youPicked === "none" ? backgroundTriangle() : { color: "black" }}
    >
      <Header score={score} />
      <Chart visibility={rulesRender} show={rulepage} />
      <Counter youPicked={youPicked} comPicked={comPicked} picked={picked} />
      {youPicked !== "none" && <Message result={result} />}
      <Rules visibility={rulesRender} />
    </div>
  );
}
