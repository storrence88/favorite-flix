import * as React from 'react';
import PageLayout from '../layouts/PageLayout';
import styles from "../styles/Home.module.css";

const Television = () => {
    return (
        <>
        <PageLayout />
        <h1>Welcome to TV!</h1>

        <footer className={styles.footer}>
        <h2>Footer</h2>
      </footer>
        </>
    )
};

export default Television;