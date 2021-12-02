import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import PageLayout from "../layouts/PageLayout";
import requests from "./requests";
import Poster from "./poster";
import { useStateValue } from "../components/StateProvider.js";

const SearchResult: NextPage = () => {
  //grab my state
  const [{ searchResultMovies }, dispatch] = useStateValue();

  let url = requests.searchMovie;

  const [movieResults, setMovieResults] = useState([]);

  return (
    <PageLayout>
      <div className={styles.container}>
        <Head>
          <title>Favorite Flix</title>
          <meta
            name="Your Favorite Media"
            content="Created with SUPER POWERS"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.mainMovieSearch}>
          {searchResultMovies.map((movie) => {
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
    </PageLayout>
  );
};

export default SearchResult;
