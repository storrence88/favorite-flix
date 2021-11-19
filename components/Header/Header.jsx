import React from 'react';
import styles from './style.module.css';
const Header = () => {
  
// const images = ['https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_960_720.jpg','https://freeforcommercialuse.net/wp-content/uploads/2021/03/msp_2102_7467.jpg'
//     ,'https://freeforcommercialuse.net/wp-content/uploads/2018/06/msp_1805_3274.jpg']


    return (
      <div className={styles.container} id="header-container">
        <img src="../favoriteflix.png" className="header-img" alt="favorite flix logo"/>
      </div>
      );
}
 

export default Header;