import "../styles.css";
import Header from "./Header.jsx";
import Counter from "./Counter";
import Rules from "./Rules";
import mySvG from "./images/bg-triangle.svg";
import { useState } from "react";
import Chart from "./Chart.jsx";

export default function App() {
  const [rulepage, pagevalue] = useState(0);
  const [youPicked, updatePicked] = useState("none");
  const [comPicked, updateCom] = useState("none");
  function picked(event) {
    updatePicked(event.target.className);
    let com = Math.floor(Math.random() * 3);
    if (com === 0) updateCom("paper");
    else if (com === 1) updateCom("scissors");
    else updateCom("rock");
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
      <Header />
      <Chart visibility={rulesRender} show={rulepage} />
      <Counter youPicked={youPicked} comPicked={comPicked} picked={picked} />
      <Rules visibility={rulesRender} />
    </div>
  );
}
