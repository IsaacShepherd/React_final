import React from "react";
import { useState, useEffect } from "react";
import "./pages-styles/Product_page.css";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../features/api/apiSlice";
import { formatCurrency } from "../utils/formatCurrency";

const Product_page = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  let product = {};

  if (!isLoading) {
    product = data[0];
  }

  const [count, setCount] = useState(1);

  if (count <= 0) {
    setCount(1);
  }

  let actualPrice = product.price;
  let discountPrice = product.discont_price;

  if (discountPrice) {
    actualPrice = discountPrice;
  }

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <div className="product-page-container">
      <img src={`http://localhost:3333${product.image}`} alt={product.title} />
      <div className="product-item-container">
        <p className="product-name">{product.title}</p>
        <div className="product-price-container">
          <p className="product-price">{formatCurrency(actualPrice)}</p>
          <p className="discounted-price">
            {product.discont_price && formatCurrency(product.price)}
          </p>
          <button className="add-to-cart">Add to cart</button>
        </div>
        <div className="counter-container">
          <div className="counter-buttons-container">
            <button className="increment" onClick={() => setCount(count + 1)}>
              +
            </button>
            <p className="quantity">{count}</p>
            <button className="decrement" onClick={() => setCount(count - 1)}>
              -
            </button>
          </div>
        </div>
        <div className="product-description">
          <h3>Description</h3>
          <p className="mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product_page;
