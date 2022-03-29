import * as React from "react";
import Link from "next/link";

function MenuItems(props) {
  const menuItems = [
    <Link key="a" href="/">
      <a>Home</a>
    </Link>,
    <Link key="b" href="/movies">
      <a>Movies</a>
    </Link>,
    <Link key="c" href="/tv">
      <a>TV</a>
    </Link>,
  ];

  return menuItems.map((menuItems) => <li key={menuItems}>{menuItems}</li>);
}

export default MenuItems;
