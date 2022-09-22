import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Menu = () => {
  return (
    <header>
      <Link to="/">
        <span>Movies</span>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
};

export default Menu;
