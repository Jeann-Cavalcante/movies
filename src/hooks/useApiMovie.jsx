import axios from "axios";
import { useEffect, useState } from "react";
import { useCategoryContext } from "./useCategoryContext";

export const useApiMovie = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);

  const { categoria } = useCategoryContext();
  // console.log(url);

  //api.themoviedb.org/3/genre/movie/list?api_key=0a63895da26658ca9dd1ffeb20159d01&language=pt-br

  useEffect(() => {
    const GetMovie = async () => {
      try {
        setLoading(true);
        const api = await axios.get(url, {
          params: {
            api_key: import.meta.env.VITE_KEY,
            language: "pt-BR",
            page: 1,
          },
        });

        setData(api.data.results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    GetMovie();
  }, [url]);

  useEffect(() => {
    const GetInfo = async () => {
      try {
        const api = await axios.get(url, {
          params: {
            api_key: import.meta.env.VITE_KEY,
            language: "pt-BR",
            page: 1,
          },
        });
        setInfo(api.data);
        // console.log(api.data);
      } catch (err) {
        console.log(err);
      }
    };
    GetInfo();
  }, [url]);

  return { data, loading, info };
};
