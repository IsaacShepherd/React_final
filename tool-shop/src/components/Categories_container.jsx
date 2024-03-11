import Categories_card from "./Categories_card";
import "./components-styles/Categories_container.css";
import { useSelector } from "react-redux";

export default function Categories_container() {
  const { list } = useSelector(({ categories }) => categories);

  // console.log("list", list);

  const listItems = list.map((item) => {
    return (
      <Categories_card key={item.id} title={item.title} image={item.image} />
    );
  });

  return (
    <section className="categories-container">
      <h2 className="mb-2">Categories</h2>
      <div className="categories-list">{listItems}</div>
    </section>
  );
}
