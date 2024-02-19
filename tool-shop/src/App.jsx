import Navbar from "./components/Navbar";
import Main_page from "./pages/Main_page";
import All_products from "./pages/All_products";
import Categories from "./pages/Categories";
import All_sales from "./pages/All_sales";
import Not_found from "./pages/Not_found";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Shoping_cart from "./pages/Shoping_cart_page";
import Shoping_cart_page from "./pages/Shoping_cart_page";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main_page />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/all-products" element={<All_products />} />
          <Route path="/all-sales" element={<All_sales />} />
          <Route path="/shoping-cart" element={<Shoping_cart_page />} />
          <Route path="*" element={<Not_found />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
