import * as React from 'react';
import styles from './style.module.css';
import {useState} from 'react';
import Header from '../Header/Header';
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

    // const {tracks} = Header;
    // const {items} = tracks;

    // const filteredItems = getFilteredItems(query, items);
    
    return ( 
        <div className="searchBar">
            <label htmlFor="">Search:</label>
            <input type="text" onChange={e => setQuery(e.target.value)} ></input>
            <ul>
                {/* {filteredItems.map(value => <h1 key={value.name}>{value.name}</h1>)} */}
            </ul>
        </div>
     );
}
 
export default Searchbar;