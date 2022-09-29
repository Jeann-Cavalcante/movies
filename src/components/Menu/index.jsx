import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useCategoryContext } from "../../hooks/useCategoryContext";
import styles from "./styles.module.scss";

const Menu = () => {
  const { setCategoria, setId } = useCategoryContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };
  //   window.addEventListener("resize", handleResize);
  //   console.log(size);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header>
      <Link
        onClick={() => {
          setCategoria("movie"), setId(null);
        }}
        to="/"
      >
        <span>CineFlix</span>
      </Link>

      <nav className={`menu ${menuOpen ? styles.isMenu : ""}`}>
        <Link
          onClick={() =>
            setCategoria("movie") & setMenuOpen(false) & setId(null)
          }
          to="/"
        >
          Filmes
        </Link>
        <Link
          onClick={() => setCategoria("tv") & setMenuOpen(false) & setId(null)}
          to="/serie"
        >
          Series
        </Link>
        <Link to="/favoritos" onClick={() => setMenuOpen(false) & setId(null)}>
          Favoritos
        </Link>
      </nav>

      <div className={styles.Svg}>
        {!menuOpen ? (
          <List size={40} onClick={menuToggleHandler} />
        ) : (
          <X size={40} onClick={menuToggleHandler} />
        )}
      </div>
    </header>
  );
};

export default Menu;
