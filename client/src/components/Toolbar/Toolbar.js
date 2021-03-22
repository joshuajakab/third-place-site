import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../Sidedrawer/DrawerToggleButton/DrawerToggleButton';
import Logo from '../../Images/third-place-logo.svg'

const toolbar = props => (
    <header className="toolbar">
       
        <button id="logo-button" onClick={event => window.location.href = '/'}>
        <img id="logo" src={Logo} alt='logo'></img>
        </button>
       
        
    </header>
)

export default toolbar