import axios from "axios";
import { useEffect, useState } from "react";

export const useApiMovie = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const GetMovie = async () => {
      setLoading(true);

      const api = await axios.get(url, {
        params: {
          api_key: "0a63895da26658ca9dd1ffeb20159d01",
          language: "pt-BR",
        },
      });

      setData(api.data.results);

      setLoading(true);
      // console.log(api.data.results);
    };

    GetMovie();
  }, []);

  return { data, loading };
};