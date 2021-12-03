import * as React from "react";
import styles from "../styles/Overview.module.css";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/NavBar/Navbar";

const MovieOverview = () => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  const movieObj = {
    vote_average: 7.2,
    title: "Venom: Let There Be Carnage",
    overview:
      "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
    release_date: "2021-09-30",
    adult: false,
    backdrop_path: "/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
    genre_ids: [878, 28, 12],
    id: 580489,
    original_language: "en",
    original_title: "Venom: Let There Be Carnage",
    poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    vote_count: 3726,
    video: false,
    popularity: 13071.277,
    media_type: "movie",
  };

  return (
    <div className={styles.overview}>
      <Navbar />
      <div className={styles.outterContainer}>
        <div className={styles.leftPanel}>
          <div className={styles.bigPosterContainer}>
            <Image
              src={base_url + movieObj.poster_path}
              alt={movieObj.title}
              layout="fill"
            />
            {/* <img src={base_url + movieObj.poster_path} alt={movieObj.title} /> */}
          </div>
        </div>
        <div className={styles.rightPanel}></div>
      </div>
    </div>
  );
};

export default MovieOverview;
