import React from "react";
import rules from "./images/image-rules.svg";

export default function Chart(props) {
  function chartToggle() {
    return (
      <div>
        <div onClick={props.visibility} className="cross">
          X
        </div>
        <p>RULES</p>
        <img alt="rules" className="rules-image" src={rules} />
      </div>
    );
  }
  function visibilityNone() {
    if (props.show === 1) return { visibility: "visible" };
    else return { visibility: "hidden" };
  }
  return (
    <div style={visibilityNone()} className="chart">
      {props.show && chartToggle()}
    </div>
  );
}
