import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCategorieQuery } from "../features/api/apiSlice";
import Product_card from "../components/Product_card";

const Single_Categorie = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching, isSuccess } = useGetCategorieQuery({
    id,
  });

  console.log("data", data);

  let listItems = {};

  if (!isLoading) {
    listItems = data.data.map((item) => {
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
  }

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <h2 className="mb-2">{data.category.title}</h2>
      <div className="on-sale-list">{listItems}</div>
    </>
  );
};

export default Single_Categorie;
