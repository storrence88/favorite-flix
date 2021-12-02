import * as React from 'react';
import PageLayout from '../layouts/PageLayout';
import styles from "../styles/Home.module.css";

const Movies = () => {
    return (
        <>
        <PageLayout />
        <h1>Welcome to Movies!</h1>

        <footer className={styles.footer}>
        <h2>Footer</h2>
      </footer>
        </>
    )
};

export default Movies;