import styles from "../styles/Home.module.css";
import Image from "next/image";

const base_url = "https://image.tmdb.org/t/p/original";

function poster(props) {
  let posterImage = `${base_url}${props.movie.poster_path}`;
  let imageEnd = props.movie.poster_path;
  let posterPlaceholder =
    "https://betravingknows.com/wp-content/uploads/2017/12/video-movie-placeholder-image.png";

  return (
    <div className={styles.poster}>
      <div className={styles.imgHolder}>
        <img
          src={imageEnd != null ? posterImage : posterPlaceholder} //"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
          alt="Poster Image"
          className={[
            styles.posterImage,
            imageEnd != null ? "" : styles.grayscale,
          ].join(" ")}
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
