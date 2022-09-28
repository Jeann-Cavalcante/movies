import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useApiMovie } from "../../hooks/useApiMovie";
import { useCategoryContext } from "../../hooks/useCategoryContext";
import Loading from "../Loading";
import styles from "./styles.module.scss";

const Carousel = ({ list, title, id }) => {
  const [arrowLeft, setArrowLeft] = useState(false);

  const { categoria } = useCategoryContext();

  const url = `https://api.themoviedb.org/3/${categoria}/${
    id ? id + "/similar" : list
  }`;
  const { data, loading } = useApiMovie(url);

  const carousel = useRef(null);

  function handleLeftClick() {
    const positionScroll = carousel.current.children[0].getBoundingClientRect();
    if (positionScroll.left < 0) {
      setArrowLeft(true);
    } else {
      setArrowLeft(false);
    }
    carousel.current.scrollLeft -= carousel.current.offsetWidth - 200;
    // console.log(positionScroll.left);
  }

  function handleRightClick() {
    const positionScroll = carousel.current.children[0].getBoundingClientRect();

    if (positionScroll.left - 1 < 0) {
      setArrowLeft(true);
    } else {
      setArrowLeft(false);
    }
    carousel.current.scrollLeft += carousel.current.offsetWidth - 200;
    // console.log(positionScroll.left);
  }

  return (
    <div className={styles.Container}>
      <h2>{title}</h2>
      {arrowLeft && (
        <div className={styles.ArrowLeft} onClick={handleLeftClick}>
          <ArrowLeft size={45} weight="bold" />
        </div>
      )}

      <div className={styles.ArrowRight} onClick={handleRightClick}>
        <ArrowRight size={45} weight="bold" />
      </div>
      <div className={styles.Carousel} ref={carousel}>
        {data?.map((item) => (
          <Link key={item.id} to={`/${categoria}/${item.id}`}>
            {loading ? (
              <Loading />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.title}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
