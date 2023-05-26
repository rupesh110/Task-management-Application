import React from "react";
import "./textPointer.css";

export default function TextPointer({ text, fontSize = "20", color, onClick, icon }) {
    const textStyle = {
        fontSize: `${fontSize}px`,
        color: color,
    };

    return (
        <div>
            <p className="textPointer" style={textStyle} onClick={onClick}>
                {text}
                {icon && <span className="icon">{icon}</span>}
                
            </p>
        </div>
    );
}
