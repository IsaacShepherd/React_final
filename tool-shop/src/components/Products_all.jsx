import Product_card from "./Product_card";
import "./components-styles/Products_on_sale.css";
import { useState, useEffect } from "react";

const endpoint = "http://localhost:3333/products/all";

export default function Products_all() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(endpoint).then((res) => res.json());

      setProducts(data);
    })();
  }, []);

  const listItem = products.map((item) => {
    return <Product_card key={item.id} title={item.title} image={item.image} />;
  });

  return (
    <section className="on-sale-container">
      <h2 className="mb-2 mt-2">All products</h2>
      <div className="on-sale-list">{listItem}</div>
    </section>
  );
}
