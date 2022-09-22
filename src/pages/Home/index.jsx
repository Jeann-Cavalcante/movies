import Carousel from "../../components/Carousel";
import { useApiMovie } from "../../hooks/useApiMovie";

const Home = () => {
  const url = "https://api.themoviedb.org/3/movie/now_playing";
  const { data, loading } = useApiMovie(url);

  // console.log(data);
  return (
    <div>
      <Carousel title="Populares" category="movie" list="popular" />
    </div>
  );
};

export default Home;
