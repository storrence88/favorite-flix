import styles from "../styles/Home.module.css";
import Filters from "./filters";

export default function MostPopular() {
  return (
    <div className={styles.rows}>
      <Filters />
    </div>
  );
}
