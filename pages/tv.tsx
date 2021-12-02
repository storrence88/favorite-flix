import * as React from "react";
import PageLayout from "../layouts/PageLayout";
import styles from "../styles/Home.module.css";
import axios from "./axios";
import { useState, useEffect } from "react";
import Poster from "./poster";
import Filters from "./filters";

const Television = () => {
  const [television, setTelevision] = useState([]);
  const url = "/trending/tv/day?api_key=faa1c2f74e1e191504ff1107bc98d472";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setTelevision(request.data.results);
      console.log(request.data.results);
    }
    fetchData();
  }, [url]);

  return (
    <PageLayout>
      <div className={styles.moviesContainer}>
        <Filters name="Popular TV" />
        {television.map((tv) => (
          <Poster key={tv?.id} movie={tv} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Television;
