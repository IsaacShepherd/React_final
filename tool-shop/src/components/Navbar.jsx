import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import "./components-styles/Navbar.css";
import CartIcon from "../assets/CartIcon";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-logo">
        <Logo />
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="categories">Categories</Link>
        </li>
        <li>
          <Link to="all-products">All products</Link>
        </li>
        <li>
          <Link to="all-sales">All Sales</Link>
        </li>
      </ul>
      <Link className="cart-icon" to="shoping-cart">
        <CartIcon />
      </Link>
    </nav>
  );
}
