import { useSelector } from "react-redux";
import Product_card from "./Product_card";
import "./components-styles/Products_on_sale.css";
import { Link } from "react-router-dom";

export default function Products_on_sale() {
  const { list } = useSelector(({ products }) => products);

  let discountedList = [];

  list.map((item) => {
    if (item.discont_price) {
      discountedList.push(item);
    }
  });

  const listItems = discountedList.map((item) => {
    return (
      <Link to={`/products/${item.id}`}>
        <Product_card
          key={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          discont_price={item.discont_price}
        />
      </Link>
    );
  });

  return (
    <section className="on-sale-container">
      <div className="on-sale-list">{listItems}</div>
    </section>
  );
}
