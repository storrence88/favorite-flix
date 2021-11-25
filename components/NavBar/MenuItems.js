import * as React from 'react';

// I have not put in any links because I don't think the other pages have been built yet

function MenuItems(props) {
    const menuItems = [<a href={'link'} target='_blank'>Home</a>,
    <a href={'link'} target='_blank'>Movies</a>,
    <a href={'link'} target='_blank'>TV</a>];

return (menuItems.map(menuItems => <li>{menuItems}</li>)
)};

export default MenuItems;