import React from "react";

import "./text.css";

export default function Text({ text, fontSize = "20" }) {


    const textStyle = {
        fontSize: `${fontSize}px`,
    };
    
    return (
        <div>
        <p className="text" style={textStyle}>
            {text}
        </p>
        </div>
    );
    }