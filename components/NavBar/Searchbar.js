import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "./axios";
import requests from "./requests";
import { useStateValue } from "../StateProvider.js";

const Searchbar = () => {
  const [{}, dispatch] = useStateValue();

  const router = useRouter();

  const [query, setQuery] = useState("");
  const [result, setResult] = "";
  let url = requests.searchMovie + query;

  async function fetchData() {
    const request = await axios.get(url);

    console.log(request.data.results);

    dispatch({
      type: "SET_RESULT",
      movies: request.data.results,
    });
    router.push("/searchResult");
  }

  return (
    <div>
      <label htmlFor="">Search</label>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Movies..."
      ></input>
      <button onClick={fetchData}> Search</button>
    </div>
  );
};

export default Searchbar;
