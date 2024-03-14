import { Link } from "react-router-dom";
import Categories_card from "./Categories_card";
import "./components-styles/Categories_container.css";
import { useSelector } from "react-redux";

export default function Categories_container() {
  const { list } = useSelector(({ categories }) => categories);

  const listItems = list.map((item) => {
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
