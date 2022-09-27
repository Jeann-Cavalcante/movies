import axios from "axios";
import { useEffect, useState } from "react";

export const useApiMovie = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const GetMovie = async () => {
      try {
        setLoading(true);
        const api = await axios.get(url, {
          params: {
            api_key: "0a63895da26658ca9dd1ffeb20159d01",
            language: "pt-BR",
          },
        });

        setData(api.data.results);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    GetMovie();
  }, []);

  useEffect(() => {
    const GetInfo = async () => {
      try {
        setLoading(true);

        const api = await axios.get(url, {
          params: {
            api_key: "0a63895da26658ca9dd1ffeb20159d01",
            language: "pt-BR",
          },
        });
        setInfo(api.data);
        // console.log(api.data);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    GetInfo();
  }, []);

  return { data, loading, info };
};
