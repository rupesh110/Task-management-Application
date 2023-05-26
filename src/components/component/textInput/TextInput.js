import React from "react";

export default function TextInput({ placeholder, fontSize=20, onChange}) {
    const inputStyle = {
        fontSize: `${fontSize}px`,
        borderRadius: "5px",
        paddingLeft: "10px",
        margin: "10px",
    }

  return (
      <div className="inputContainer">
        <input
            type="text"
              placeholder={placeholder}
              style={inputStyle}
              onChange={onChange}
              
        />
    </div>
  );
}
