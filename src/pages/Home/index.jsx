import { useApiMovie } from "../../hooks/useApiMovie";

const Home = () => {
  const url = "https://api.themoviedb.org/3/movie/now_playing";
  const { data, loading } = useApiMovie(url);

  // console.log(data);
  return (
    <div>
      <h1>Home aqui</h1>
    </div>
  );
};

export default Home;
