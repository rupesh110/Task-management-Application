import React from "react";


export default function TextInput({ placeholder, fontSize = 20, value, onChange, type="text", icon }) {


  const inputContainerStyle = {
    position: "relative",
    margin: "10px",
  };
  
  const inputStyle = {
    fontSize: `${fontSize}px`,
    borderRadius: "5px",
    paddingLeft: "40px",
    paddingRight: "40px",
  };


  const iconStyle = {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  };

 
  return (
    <div style={inputContainerStyle}>
      {icon && <div style={iconStyle}>{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChange={onChange}
      />
    
    </div>
  );
}
