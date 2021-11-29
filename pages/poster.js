import styles from "../styles/Home.module.css";
import Image from "next/image";

const base_url = "https://image.tmdb.org/t/p/original";

function poster(props) {
  return (
    <div className={styles.poster}>
      <div className={styles.imgHolder}>
        <img
          src={`${base_url}${props.movie.poster_path}`} //"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
          alt="Poaster Image"
          className={styles.posterImage}
        />
      </div>
      <div className={styles.posterDetails}>
        <h4 className={styles.movieName}>{props.movie.title}</h4>
        <p className={styles.releaseDate}>{props.movie.release_date}</p>
      </div>
    </div>
  );
}

export default poster;
