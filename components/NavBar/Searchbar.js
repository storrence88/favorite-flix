import * as React from 'react';
import styles from './style.module.css';
import {useState, useEffect} from 'react';
import Header from '../Header/Header';
import axios from './axios';
import requests from './requests';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// const element = <FontAwesomeIcon icon={faCoffee} />

const getFilteredItems = (query, items) => {
    if (!query) {
        return items;
    }
    return items.filter(movie => movie.name.includes(query))
}

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = ('');
    let url=requests.searchMovie+"Venom"
    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(url);
        //   return request.data.results;
        console.log(request.data.results);
        }
        fetchData();
      }, [url]);

    return ( 
        <div className="searchBar">
            <label htmlFor="">Search:</label>
            <input type="text" onChange={e => setQuery(e.target.value)} ></input>

        </div>
     );
}
 
export default Searchbar;