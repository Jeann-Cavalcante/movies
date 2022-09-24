import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const listaFavoritos = localStorage.getItem("@favoritos");

    setFavoritos(JSON.parse(listaFavoritos) || []);

    console.log(favoritos);
  }, []);

  return (
    <div className={styles.Container}>
      <h1>Meus favoritos</h1>

      <div className={styles.Lista}>
        <div className={styles.Img}>
          <img
            src="https://image.tmdb.org/t/p/original//ruHPkmmAwBTCzNXtHot18rs6ctN.jpg"
            alt=""
          />
        </div>
        <div className={styles.Text}>
          <h2>Titulo</h2>
          <p>
            Descrição do filme
            icbshscbhsdbcihbisabicbiasdcbiasbiucbsiubcsipabscip
          </p>

          <button>Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default Favoritos;
