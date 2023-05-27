import React from "react";
import "./card.css";

export default function Card({ title, text, link }) {

  return (
    <div className="cardFooterContainer">
      <a href={link} style={{ textDecoration: "none" }}>
        <p className="cardTitle">{title}</p>
        <p className="cardText">{text}</p>
      </a>
    </div>
  );
}
