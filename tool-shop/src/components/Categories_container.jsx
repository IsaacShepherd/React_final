import Categories_card from "./Categories_card";
import "./components-styles/Categories_container.css";

export default function Categories_container() {
  return (
    <section className="categories-container">
      <h2>Categories</h2>
      <div className="categories-list">
        <Categories_card />
        <Categories_card />
      </div>
    </section>
  );
}
