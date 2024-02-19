import "./components-styles/Shoping_cart_item.css";
import { useState } from "react";

const Shoping_cart_item = (props) => {
  const [count, setCount] = useState(1);

  if (count <= 0) {
    setCount(1);
  }

  return (
    <div className="shoping-cart-item-container">
      <img src={props.img} alt={props.name} />
      <div className="content-container">
        <div className="item-name-container">
          <p className="item-name">{props.name}</p>
          <button className="delete-item-button">X</button>
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
          <p className="price">{props.price}</p>
          <p className="original-price">{props.original_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Shoping_cart_item;
