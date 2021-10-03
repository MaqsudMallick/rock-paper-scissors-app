import "../styles.css";
import Header from "./Header.jsx";
import Counter from "./Counter";
import Rules from "./Rules";
import mySvG from "./images/bg-triangle.svg";
import { useState } from "react";
import Chart from "./Chart.jsx";

export default function App() {
  const [rulepage, pagevalue] = useState(0);
  function rulesRender() {
    let val = rulepage ? 0 : 1;
    pagevalue(val);
  }
  return (
    <div className="App" style={{ backgroundImage: `url(${mySvG})` }}>
      <Header />
      <Chart visibility={rulesRender} show={rulepage} />
      <Counter />
      {/* <div className= "third">
      <Hand  />
      </div> */}
      <Rules visibility={rulesRender} />
    </div>
  );
}
