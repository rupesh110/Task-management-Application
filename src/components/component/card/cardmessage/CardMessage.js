import React, { useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./cardmessage.css";
import { DataContext } from "../../../../data/DataContext";

export default function CardMessage({ messages }) {
  const messagesEndRef = useRef(null);
  const { selectedUsers, setSelectedUsers } = React.useContext(DataContext);

  useEffect(() => {
    scrollToBottom();
    return () => {
      // Cleanup: Revoke object URLs
      messages.forEach((message) => {
        if (message.file) {
          URL.revokeObjectURL(message.file);
        }
      });
    };
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className="cardContainer">
      <div className="cardMessageDisplay">
        <div className="navUsers" onClick={handleClick}>
          <FaUserCircle
            size={30}
            style={{ marginTop: "17px", marginLeft: "7px" }}
          />
          <p style={{ fontSize: "20px", marginLeft: "8px" }}>
            {selectedUsers}
          </p>
        </div>
      </div>
      <div className="cardMessageContainer">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`messageContainer ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            {message.text && <p className="displayText">{message.text}</p>}
            {message.file && message.file instanceof File && (
              <div className="imageContainer">
                <img
                  src={URL.createObjectURL(new Blob([message.file], { type: message.file.type }))}
                  alt="Message Image"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            )}

          
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
