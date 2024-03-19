import React from "react";
import { formatCurrency } from "../utils/formatCurrency";

export default function Product_card(props) {
  let actualPrice = props.price;
  let discountPrice = props.discont_price;

  if (discountPrice) {
    actualPrice = discountPrice;
  }

  return (
    <div className="product">
      <img src={`http://localhost:3333${props.image}`} alt={`${props.title}`} />
      <div className="product-info-container">
        <p className="">{props.title}</p>
        <div className="price-container">
          <p className="price-sm">{formatCurrency(actualPrice)}</p>
          <p className="discounted-price-sm">
            {props.discont_price && formatCurrency(props.price)}
          </p>
        </div>
      </div>
    </div>
  );
}
