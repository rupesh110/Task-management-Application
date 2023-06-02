import React, { useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";

import "./cardmessage.css";

export default function CardMessage({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="cardContainer">
      <div className="cardMessageDisplay">
        <div className="navUsers">
          <FaUserCircle size={30} style={{ marginTop: "17px", marginLeft: "7px" }} />
          <p style={{ fontSize: "20px", marginLeft: "8px" }}>user name</p>
        </div>
      </div>
      <div className="cardMessageContainer">
        {messages.map((message, index) => (
          <div key={index} className={`messageContainer ${index % 2 === 0 ? "left" : "right"}`}>
            {message.text && <p className="displayText">{message.text}</p>}
            {message.file && (
              <div className="imageContainer">
<img src={URL.createObjectURL(message.file)} alt="Message Image" style={{ width: '100%', height: '100%' }} />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
