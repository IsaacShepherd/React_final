import Categories_card from "./Categories_card";
import "./components-styles/Categories_container.css";

export default function Categories_container() {
  return (
    <section className="categories-container">
      <Categories_card />
      <Categories_card />
      <div className="categories-list"></div>
    </section>
  );
}
