import Product_card from "./Product_card";
import "./components-styles/Products_on_sale.css";

export default function Products_on_sale() {
  return (
    <section className="on-sale-container">
      <h2>Sale</h2>
      <div className="on-sale-list">
        <Product_card />
        <Product_card />
        <Product_card />
      </div>
    </section>
  );
}
