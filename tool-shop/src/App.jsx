import { Route, Routes } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Main_page from "./pages/Main_page";
import All_products from "./pages/All_products";
import Categories from "./pages/Categories";
import All_sales from "./pages/All_sales";
import Not_found from "./pages/Not_found";
import Shoping_cart_page from "./pages/Shoping_cart_page";
import Product_page from "./pages/Product_page";

import ScrollToTop from "./components/functionalComponents/ScrollToTop";

import { getCategories } from "./features/categories/categoriesSlice";
import { getProducts } from "./features/products/productsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main_page />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/all-products" element={<All_products />} />
          <Route path="/all-sales" element={<All_sales />} />
          <Route path="/shoping-cart" element={<Shoping_cart_page />} />
          <Route path="/products/:id" element={<Product_page />} />
          <Route path="*" element={<Not_found />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
