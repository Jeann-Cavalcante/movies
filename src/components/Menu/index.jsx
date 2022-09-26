import { List } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useCategoryContext } from "../../hooks/useCategoryContext";
import styles from "./styles.module.scss";

const Menu = () => {
  const { setCategoria } = useCategoryContext();
  const [menuVisibility, setMenuVisibility] = useState("");

  function handleMenu() {
    if (menuVisibility === "") {
      setMenuVisibility("menuVisibility");
      console.log(menuVisibility);
    } else {
      setMenuVisibility("");
      console.log(menuVisibility);
    }
  }

  return (
    <header>
      <Link onClick={() => setCategoria("movie")} to="/">
        <span>CineFlix</span>
      </Link>

      <nav className={`${menuVisibility}`}>
        <Link onClick={() => setCategoria("movie")} to="/">
          Filmes
        </Link>
        <Link onClick={() => setCategoria("tv")} to="/serie">
          Series
        </Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
      <List size={40} onClick={handleMenu} />
    </header>
  );
};

export default Menu;
