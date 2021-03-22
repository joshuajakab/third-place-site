import React, { Component, useState } from 'react';
import Loungeheader from '../Images/lounge-header-background.jpg';
import Loungelogo from '../Images/lounge-logo.svg';
import Lounge1 from '../Images/lounge-1.jpg';
import Lounge2 from '../Images/lounge-2.jpg';
import Lounge3 from '../Images/lounge-3.jpg';
import Lounge4 from '../Images/lounge-4.jpg';
import Lounge5 from '../Images/lounge-5.jpg';
import '../CSS/lounge.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import SideDrawer from '../components/Sidedrawer/Sidedrawer/Sidedrawer';
import Backdrop from './Sidedrawer/Backdrop/Backdrop';
import Toolbar from './Toolbar/Toolbar';
import Facebook from '../Images/facebook.svg'
import Instagram from '../Images/instagram.svg'
import Twitter from '../Images/twitter.svg'






class Lounge extends Component {

  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {

    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="content-page">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}

        <div className="page-header">
          <img className="main-logo" src={Loungelogo} alt='lounge-logo'></img>
          <img className="header-background" src={Loungeheader} alt='background image'></img>

        </div>
        <div className="hours">

          <h1>Hours</h1>
          <div>
            Monday: 4pm - 9pm <br />
                      Tuesday: 4pm - 9pm <br />
                      Wednesday: 4pm - 9pm <br />
                      Thursday: 4pm - 9pm <br />
                      Friday: 4pm - 12am <br />
                      Saturday: 12pm - 12am <br />
                      Sunday: 12pm - 9pm
                    </div>

          <div className="changeable-hours">

          </div>
        </div>
        <div className='bio'>

          Third places are the many public places where people can gather, put aside the concerns of home and work, and hang out simply for the pleasures of good company and live conversation. <br /> <br /> -Ray Oldenburg <br />The Great Good Place
            </div>
        <Carousel className="carousel">
          <div>
            <img src={Lounge1} className="carousel-pic" />

          </div>
          <div>
            <img src={Lounge2} className="carousel-pic" />

          </div>
          <div>
            <img src={Lounge3} className="carousel-pic" />

          </div>
          <div>
            <img src={Lounge4} className="carousel-pic" />

          </div>
          <div>
            <img src={Lounge5} className="carousel-pic" />

          </div>
        </Carousel>
        <div className="footer">

        </div>
      </div>
    )
  }
}

export default Lounge