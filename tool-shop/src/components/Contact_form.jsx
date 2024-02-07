import "./components-styles/Contact_form.css";
import Discount_form from "./Discount_form";

export default function Contact_form() {
  return (
    <section className="contact-form-container">
      <h2>5% off on the first order</h2>
      <div className="form-with-image">
        <img src="..\gardning_hands.png" alt="gardning hands" />
        <Discount_form />
      </div>
    </section>
  );
}
