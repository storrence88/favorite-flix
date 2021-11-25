import * as React from 'react';
import MenuItems from './MenuItems';
import styles from './style.module.css';

const Navbar = () => {
    return ( 
        <div className={styles.navbar}>
            <img src="favoriteflix.png" />
            <MenuItems />
            
        </div>
     );
}
 
export default Navbar;