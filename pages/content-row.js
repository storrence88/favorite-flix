import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Filters from "./filters";
import Poster from "./poster";
import axios from "./axios";

export default function MostPopular({ url, name }) {
  const [movies, setMovies] = useState([]);

  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  let listImages = [];

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setMovies(request.data.results);
      console.log(request.data.results);
    }
    fetchData();
  }, [url]);

  return (
    <div className={styles.rows}>
      <Filters name={name} />
      <div className={styles.posterRow}>
        {movies.map((movie) => {
          listImages.push();
          return (
            <Poster key={movie.id} movie={movie} poster={movie.poster_path} />
          );
        })}
      </div>
    </div>
  );
}
