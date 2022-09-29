import Carousel from "../../components/Carousel";
import { useApiMovie } from "../../hooks/useApiMovie";
import { useCategoryContext } from "../../hooks/useCategoryContext";

const Home = () => {
  const { setId, setCategoria } = useCategoryContext();

  setId(null);
  setCategoria("movie");

  return (
    <div>
      <Carousel title="Populares" category="movie" list="popular" />
      <Carousel title="Em cartaz" category="movie" list="now_playing" />
      <Carousel title="Melhores avaliados" category="movie" list="top_rated" />
      <Carousel title="Futuros lançamento" category="movie" list="upcoming" />
    </div>
  );
};

export default Home;
