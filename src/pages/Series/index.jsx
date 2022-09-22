import Carousel from "../../components/Carousel";

const Serie = () => {
  return (
    <div>
      <Carousel title="Popular" category="tv" list="popular" />
      <Carousel title="Mais avaliados" category="tv" list="top_rated" />
    </div>
  );
};

export default Serie;
