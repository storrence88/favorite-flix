import * as React from "react";
import MenuItems from "./MenuItems";
import styles from "./style.module.css";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src="favoriteflix.png" />
      <MenuItems />
      <Searchbar />
    </div>
  );
};

export default Navbar;
