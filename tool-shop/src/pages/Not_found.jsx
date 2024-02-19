import { Link } from "react-router-dom";
import "./Not_found.css";
import Four from "../assets/Four";

export default function Not_found() {
  return (
    <section className="not-found-container">
      <div className="digits-container">
        <Four />
        <img src="..\cactus.png" alt="cactus" />
        <Four />
      </div>
      <div className="text-container">
        <h2>Page Not Found</h2>
        <p>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </div>
    </section>
  );
}
