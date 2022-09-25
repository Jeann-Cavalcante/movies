import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);
  const text = useRef(null);

  useEffect(() => {
    const listaFavoritos = localStorage.getItem("@favoritos");

    setFavoritos(JSON.parse(listaFavoritos) || []);
  }, []);

  function excluirItem(id) {
    let filtroFilmes = favoritos.filter((filme) => filme.id !== id);
    setFavoritos(filtroFilmes);
    localStorage.setItem("@favoritos", JSON.stringify(filtroFilmes));
  }

  return (
    <div className={styles.Container}>
      <h1>Meus favoritos</h1>

      {favoritos.map((item) => (
        <div key={item.id} className={styles.Lista}>
          <div className={styles.Img}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt={item.title}
            />
          </div>
          <div className={styles.Text}>
            <h2>{item.title}</h2>
            <p ref={text}>{item.overview}</p>

            <button onClick={() => excluirItem(item.id)}>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favoritos;
