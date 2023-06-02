import React from "react";
import "./cardmessage.css";

export default function CardMessage({ messages }) {
  return (
    <div className="cardMessageContainer">
      {messages.map((message, index) => (
        <p key={index} className={`displayText ${index % 2 === 0 ? 'left' : 'right'}`}>
          {message}
        </p>
      ))}
    </div>
  );
}
