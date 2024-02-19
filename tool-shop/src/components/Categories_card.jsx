import React from "react";
import "./components-styles/Categories_card.css";

export default function Categories_card(props) {
  return (
    <div className="categories-card">
      <img src={`http://localhost:3333${props.image}`} alt={`${props.title}`} />
      <p>{props.title}</p>
    </div>
  );
}
