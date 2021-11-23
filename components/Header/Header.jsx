import React from 'react';
import styles from './style.module.css';
import Slideshow from './Slideshow';

const Header = () => {

    return (
      <div className={styles.container}>
        <Slideshow />
        
      </div>
      );
}
 

export default Header;