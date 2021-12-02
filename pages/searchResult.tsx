import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import requests from "./requests";
import axios from "./axios";
import Poster from "./poster";

const SearchResult: NextPage = () => {
  let url = requests.searchMovie;

  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(requests.searchMovie + "venom");
      //console.log(result.data.results);
      setMovieResults(result.data.results);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Favorite Flix</title>
        <meta name="Your Favorite Media" content="Created with SUPER POWERS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainMovieSearch}>
        {movieResults.map((movie) => {
          return (
            <Poster
              key={movie?.id}
              movie={movie}
              poster={movie.poster_path}
              data={movie}
            />
          );
        })}
      </main>
    </div>
  );
};

export default SearchResult;
