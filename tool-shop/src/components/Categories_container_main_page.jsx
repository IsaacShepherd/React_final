import Categories_card from "./Categories_card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./components-styles/Categories_container.css";

export default function Categories_container_main_page() {
  const { list } = useSelector(({ categories }) => categories);

  const smallCategories = list.slice(0, 4);

  const listItems = smallCategories.map((item) => {
    return (
      <Link to={`/categories/${item.id}`}>
        <Categories_card key={item.id} title={item.title} image={item.image} />
      </Link>
    );
  });

  return (
    <section className="categories-container">
      <h2 className="mb-2">Categories</h2>
      <div className="categories-list">{listItems}</div>
    </section>
  );
}
