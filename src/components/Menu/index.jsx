import { Link } from "react-router-dom";
import { useCategoryContext } from "../../hooks/useCategoryContext";
import styles from "./styles.module.scss";

const Menu = () => {
  const { categoria, setCategoria } = useCategoryContext();
  console.log(categoria);
  return (
    <header>
      <Link onClick={() => setCategoria("movie")} to="/">
        <span>Movies</span>
      </Link>

      <nav>
        <Link onClick={() => setCategoria("movie")} to="/">
          Filmes
        </Link>
        <Link onClick={() => setCategoria("tv")} to="/serie">
          Series
        </Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
};

export default Menu;
