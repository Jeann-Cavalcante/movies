import Carousel from "../../components/Carousel";

const Serie = () => {
  return (
    <div className="Content">
      <Carousel title="Populares" category="tv" list="popular" />
      <Carousel title="Melhores avaliados" category="tv" list="top_rated" />
    </div>
  );
};

export default Serie;
