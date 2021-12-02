import * as React from "react";
import Link from "next/link";

function MenuItems(props) {
  const menuItems = [
    <Link href="/">
      <a>Home</a>
    </Link>,
    <Link href="/movies">
      <a>Movies</a>
    </Link>,
    <Link href="/tv">
      <a>TV</a>
    </Link>,
  ];

  return menuItems.map((menuItems) => <li>{menuItems}</li>);
}

export default MenuItems;
