import React from "react";
import "./button.css";

function Button({ text, onClick, fontSize = "20" }) {
  const buttonStyle = {
      fontSize: `${fontSize}px`,
  };

  return (
    <div>
        <button
              className="button"
              style={buttonStyle}
              onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
