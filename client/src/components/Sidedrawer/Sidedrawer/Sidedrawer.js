import React from 'react';

import './SideDrawer.css'

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menus</a></li>
            <li><a href="/lounge">The Lounge</a></li>
            <li><a href="/thirdplace">Third Place</a></li>
            <li><a href="/stevies">Stevie's</a> </li>
        </ul>
       
            <button id="phone-number-button" onClick={event => window.location.href = 'tel:8026718113'}>
            Click Here to Call <br /> (802) 671-8113
        </button>
    </nav>
);

export default sideDrawer;