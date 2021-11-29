import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import PageLayout from "../layouts/PageLayout";
import MostPopular from "./most-popular-row";
import requests from "./requests";
import Row from "./content-row";

const Home: NextPage = () => {
  const listRows = [
    { name: "Trending", url: requests.fetchTrendingMovie, id: 1 },
    { name: "Comedy", url: requests.fetchComedyMovies, id: 2 },
    { name: "Action", url: requests.fetchActionMovies, id: 3 },
    { name: "Horror", url: requests.fetchHorrorMovies, id: 4 },
  ];
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
        {listRows.map((row) => (
          <Row key={row.id} url={row.url} name={row.name} />
        ))}
      </main>

      <footer className={styles.footer}>
        <h2>Footer</h2>
      </footer>
    </div>
  );
};

export default Home;
