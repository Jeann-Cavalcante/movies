import { Plus } from "phosphor-react";
import { CircularProgressbar } from "react-circular-progressbar";
import { useParams } from "react-router-dom";

import { useApiMovie } from "../../hooks/useApiMovie";
import { useCategoryContext } from "../../hooks/useCategoryContext";
import styles from "./styles.module.scss";

import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Carousel from "../../components/Carousel";

const Info = () => {
  const { id } = useParams();
  const { categoria, setId } = useCategoryContext();

  let url = `https://api.themoviedb.org/3/${categoria}/${id}`;
  const { info } = useApiMovie(url);
  const [salvo, setSalvo] = useState(false);

  useEffect(() => {
    url = `https://api.themoviedb.org/3/${categoria}/${id}`;
  }, [id]);

  function handleCarousel() {
    console.log(salvo);
  }

  function handleFavorito(e) {
    e.preventDefault();

    const listaFavoritos = localStorage.getItem("@favoritos");

    let itemSalvo = JSON.parse(listaFavoritos) || [];

    if (info) {
      const itemExiste = itemSalvo.some((item) => item.id === info.id);

      if (itemExiste) {
        setSalvo(true);
        return toast.warn("Esse item já foi salvo");
      }

      itemSalvo.push(info);
      localStorage.setItem("@favoritos", JSON.stringify(itemSalvo));

      toast.success("Filme adicionado");
    } else {
      toast.error("Erro, tente outra vez");
    }
  }

  //If de testes
  if (info) {
    return (
      <div className={styles.Container}>
        <div className={styles.Background}>
          <img
            src={`https://image.tmdb.org/t/p/original/${info.backdrop_path}`}
            alt=""
          />
        </div>
        <div className={styles.Content}>
          <img
            src={`https://image.tmdb.org/t/p/original/${info.poster_path}`}
            alt=""
          />

          <div className={styles.Descriptions}>
            <div className={styles.Title}>
              <h1>{info.title}</h1>
              <p>{info.overview}</p>

              <CircularProgressbar
                className={styles.Circle}
                value={info.vote_average}
                maxValue="10"
                text={`${info.vote_average.toFixed(2)}`}
                styles={{
                  path: {
                    stroke: `#00875f`,
                  },
                  text: {
                    // Text color
                    fill: "#fff",
                    // Text size
                    fontSize: "28px",
                  },
                }}
              />
              <button onClick={handleFavorito}>
                <Plus size={35} weight="bold" />
                Adicionar aos favoritos
              </button>
            </div>
          </div>
        </div>

        <div className={styles.Carousel}>
          <Carousel title="Similares" onClick={handleCarousel} />
        </div>
      </div>
    );
  }
};

export default Info;
