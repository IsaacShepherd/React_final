import Hero from "../components/Hero";
import Contact_form from "../components/Contact_form";
import Categories_container_main_page from "../components/Categories_container_main_page";
import Products_main_page from "../components/Products_main_page";

export default function Main_page() {
  return (
    <>
      <Hero />
      <Categories_container_main_page />
      <Contact_form />
      <h1 className="ml-2 mb-2">Sale</h1>
      <Products_main_page />
    </>
  );
}
