import React from 'react';
import '../CSS/menu.css'
import Menuone from '../Images/Take-Out-Menu-1.jpg'
import Menutwo from '../Images/Take-Out-Menu-2.jpg'
import Brunchmenu from '../Images/Brunch Menu.png'

function Menu() {
    return(
        <div>
            <img src={Menuone} id="menu-page-one"></img>
            <img src={Menutwo} id="menu-page-two"></img>
            {/*<img src={Brunchmenu} id="brunch-menu"></img>*/}
        </div>
    )
}


export default Menu;