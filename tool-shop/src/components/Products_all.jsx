import { useSelector } from "react-redux";
import Product_card from "./Product_card";
import "./components-styles/Products_on_sale.css";
import { Link } from "react-router-dom";

export default function Products_all() {
  const { list } = useSelector(({ products }) => products);

  const listItems = list.map((item) => {
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
      <h2 className="mb-2 mt-2">All products</h2>
      <div className="on-sale-list">{listItems}</div>
    </section>
  );
}
