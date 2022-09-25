import { Link } from "react-router-dom";
import { useCategoryContext } from "../../hooks/useCategoryContext";
import styles from "./styles.module.scss";

const Menu = () => {
  const { setCategoria } = useCategoryContext();

  return (
    <header>
      <Link onClick={() => setCategoria("movie")} to="/">
        <span>Cine Flix</span>
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
