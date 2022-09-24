import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useApiMovie } from "../../hooks/useApiMovie";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Carousel = ({ category, list, title }) => {
  const [arrowLeft, setArrowLeft] = useState(false);
  // const [position, setPosition] = useState(0);
  const url = `https://api.themoviedb.org/3/${category}/${list}`;
  const { data, loading } = useApiMovie(url);

  const carousel = useRef(null);

  useEffect(() => {
    // const positionScroll = carousel.current.children[0].getBoundingClientRect();
    // console.log(positionScroll);
  }, []);

  function handleLeftClick() {
    const positionScroll = carousel.current.children[0].getBoundingClientRect();
    if (positionScroll.left < 0) {
      setArrowLeft(true);
    } else {
      setArrowLeft(false);
    }
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    console.log(positionScroll.left);
  }

  function handleRightClick() {
    const positionScroll = carousel.current.children[0].getBoundingClientRect();

    if (positionScroll.left - 1 < 0) {
      setArrowLeft(true);
    } else {
      setArrowLeft(false);
    }
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    console.log(positionScroll.left);
  }

  return (
    <div className={styles.Container}>
      <h2>{title}</h2>
      {arrowLeft && (
        <div className={styles.ArrowLeft}>
          <ArrowLeft size={45} onClick={handleLeftClick} weight="bold" />
        </div>
      )}

      <div className={styles.ArrowRight}>
        <ArrowRight onClick={handleRightClick} size={45} weight="bold" />
      </div>
      <div className={styles.Carousel} ref={carousel}>
        {data?.map((item) => (
          <Link to={`/${category}/${item.id}`}>
            <img
              key={item.id}
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt={item.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
