import React from "react";

const Message = (props) => {
  return (
    <div className="message">
      <p className="user-choice-message">YOU PICKED</p>
      <p className="house-message">THE HOUSE PICKED</p>
      <h1 className="result-message">{props.result}</h1>
      <button onClick={props.refresh} className="refresh-button">
        PLAY AGAIN
      </button>
    </div>
  );
};

export default Message;
