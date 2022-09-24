import { CircularProgressbar } from "react-circular-progressbar";
import { useParams } from "react-router-dom";

import { useApiMovie } from "../../hooks/useApiMovie";
import styles from "./styles.module.scss";

import "react-circular-progressbar/dist/styles.css";
import { useCategoryContext } from "../../hooks/useCategoryContext";

const Info = () => {
  const { id } = useParams();
  const { categoria } = useCategoryContext();
  const url = `https://api.themoviedb.org/3/${categoria}/${id}`;
  const { info } = useApiMovie(url);

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
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Info;
