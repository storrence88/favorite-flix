import styles from "../styles/Home.module.css";

export default function filters() {
  return (
    <div className={styles.filters}>
      <div className={styles.popular}>
        <h2>Popular On </h2>
      </div>

      <div className={styles.networks}>
        <span className={styles.streams}>Netflix</span>
        <span className={styles.streams}>Hulu</span>
        <span className={styles.streams}>Disney</span>
      </div>
    </div>
  );
}
