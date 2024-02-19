import Categories_card from "./Categories_card";
import { useState, useEffect } from "react";
import "./components-styles/Categories_container.css";

const endpoint = "http://localhost:3333/categories/all";

export default function Categories_container() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(endpoint).then((res) => res.json());

      setCategories(data);
    })();
  }, []);

  const listItem = categories.map((item) => {
    return (
      <Categories_card key={item.id} title={item.title} image={item.image} />
    );
  });

  return (
    <section className="categories-container">
      <h2 className="mb-2">Categories</h2>
      <div className="categories-list">{listItem}</div>
    </section>
  );
}
