import * as React from "react";
import styles from "../styles/Home.module.css";
import axios from "./axios";
import { useState, useEffect } from "react";
import Poster from "./poster";
import Filters from "./filters";
import Navbar from "../components/NavBar/Navbar";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const url =
    "/movie/popular?api_key=faa1c2f74e1e191504ff1107bc98d472&language=en-US&page=1";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setMovies(request.data.results);
      console.log(request.data.results);
    }
    fetchData();
  }, [url]);

  return (
    <div>
      <Navbar />
      <div className={styles.moviesContainer}>
        <Filters name="Popular Movies" />
        {movies.map((movie) => (
          <Poster
            key={movie?.id}
            movie={movie}
            poster={movie.poster_path}
            data={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
