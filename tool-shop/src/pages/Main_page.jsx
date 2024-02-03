import Hero from "../components/Hero";
import Categories_container from "../components/Categories_container";
import Contact_form from "../components/Contact_form";
import Products_on_sale from "../components/Products_on_sale";

export default function Main_page() {
  return (
    <>
      <Hero />
      <Categories_container />
      <Contact_form />
      <Products_on_sale />
    </>
  );
}
