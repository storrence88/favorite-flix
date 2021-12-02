import * as React from "react";
import MenuItems from "./MenuItems";
import styles from "./style.module.css";
import Searchbar from "./Searchbar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a>
            <img src="favoriteflix.png" className={styles.navLogo} />
          </a>
        </Link>
      </div>
      <MenuItems />
      <Searchbar />
    </div>
  );
};

export default Navbar;
