import React from "react";

export default function Product_card(props) {
  return (
    <div className="product">
      <img src={`http://localhost:3333${props.image}`} alt={`${props.title}`} />
      <p>{props.title}</p>
    </div>
  );
}
