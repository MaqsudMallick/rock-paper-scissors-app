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
  function picked(event) {
    updatePicked(event.target.className);
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
      <Counter youPicked={youPicked} picked={picked} />
      <Rules visibility={rulesRender} />
    </div>
  );
}
