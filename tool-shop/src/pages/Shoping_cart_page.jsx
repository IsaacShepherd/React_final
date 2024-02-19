import Shoping_cart_item from "../components/Shoping_cart_item";
import Shoping_cart_form from "../components/Shoping_cart_form";
import "./pages-styles/Shoping_cart_page.css";

function Shoping_cart_page() {
  return (
    <>
      <h1>Shoping cart</h1>
      <div className="shoping-cart-page-container">
        <div className="shoping-cart-item-list">
          <Shoping_cart_item
            img="https://stroy-pz.ru/files/gallery/48515/big/3870314b938e11ebb02000259_1657680506.jpg"
            name="Secators"
            price="200$"
            original_price="350$"
          />
          <Shoping_cart_item
            img="https://goods-photos.static1-sima-land.com/items/4270768/0/400.jpg?v=1650362763"
            name="Bucket"
            price="100$"
            original_price="200$"
          />
          <Shoping_cart_item
            img="https://goods-photos.static1-sima-land.com/items/4270768/0/400.jpg?v=1650362763"
            name="Bucket"
            price="100$"
            original_price="200$"
          />
        </div>
        <Shoping_cart_form />
      </div>
    </>
  );
}

export default Shoping_cart_page;
