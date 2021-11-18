import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import PageLayout from "../layouts/PageLayout";
import MostPopular from "./most-popular-row";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Favorite Flix</title>
        <meta name="Your Favorite Media" content="Created with SUPER POWERS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout></PageLayout>

      <main className={styles.main}>
        <h2>Body</h2>
        <MostPopular />
      </main>

      <footer className={styles.footer}>
        <h2>Footer</h2>
      </footer>
    </div>
  );
};

export default Home;
