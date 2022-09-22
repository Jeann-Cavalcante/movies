import Carousel from "../../components/Carousel";
import { useApiMovie } from "../../hooks/useApiMovie";

const Home = () => {
  const url = "https://api.themoviedb.org/3/movie/now_playing";
  const { data, loading } = useApiMovie(url);

  // console.log(data);
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
