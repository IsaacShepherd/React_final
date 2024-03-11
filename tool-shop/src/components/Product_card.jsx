import React from "react";
import { formatCurrency } from "../utils/formatCurrency";

export default function Product_card(props) {
  return (
    <div className="product">
      <img src={`http://localhost:3333${props.image}`} alt={`${props.title}`} />
      <div className="product-info-container">
        <p className="">{props.title}</p>
        <div className="price-container">
          <p className="price">{formatCurrency(props.price)}</p>
          <p className="discounted-price">
            {props.discont_price && formatCurrency(props.discont_price)}
          </p>
        </div>
      </div>
    </div>
  );
}
