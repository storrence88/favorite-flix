import * as React from "react";
import styles from "../styles/Home.module.css";
import axios from "./axios";
import { useState, useEffect } from "react";
import Poster from "./poster";
import Filters from "./filters";
import Navbar from "../components/NavBar/Navbar";

const Television = () => {
  const [television, setTelevision] = useState<any[]>([]);
  const url = "/trending/tv/day?api_key=faa1c2f74e1e191504ff1107bc98d472";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setTelevision(request.data.results);
    }
    fetchData();
  }, [url]);

  return (
    <div>
      <Navbar />
      <div className={styles.moviesContainer}>
        <Filters name="Popular TV" />
        {television.map((tv) => (
          <Poster key={tv?.id} movie={tv} />
        ))}
      </div>
    </div>
  );
};

export default Television;
