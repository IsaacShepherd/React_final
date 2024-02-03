import Navbar from "./components/Navbar";
import Main_page from "./pages/Main_page";
import All_products from "./pages/All_products";
import Categories from "./pages/Categories";
import All_sales from "./pages/All_sales";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
