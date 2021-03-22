import React, {Component} from 'react';
import Steviesheader from '../Images/stevies-header-background.jpg';
import Stevieslogo from '../Images/stevies-logo.svg';
import SideDrawer from '../components/Sidedrawer/Sidedrawer/Sidedrawer';
import Backdrop from './Sidedrawer/Backdrop/Backdrop';
import Toolbar from './Toolbar/Toolbar';
import Stevies1 from '../Images/stevies-1.jpg';
import Stevies2 from '../Images/stevies-2.jpg';
import Stevies3 from '../Images/stevies-3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../CSS/lounge.css';

class Stevies extends Component {

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
              <img className="main-logo" src={Stevieslogo} alt='lounge-logo'></img>
              <img className="header-background" src={Steviesheader} alt='background image'></img>
    
            </div>

    
            <div className="hours">

          <h1>Closed for the Season <br/> Back in the Spring!</h1>
          

          <div className="changeable-hours">

          </div>
        </div>
        <div className='bio'>
        Third places are the many public places where people can gather, put aside the concerns of home and work, and hang out simply for the pleasures of good company and live conversation. <br/> <br/>-Ray Oldenburg <br/> The Great Good Place
        </div>
    <Carousel className="carousel">
        <div>
                <img src={Stevies1} className="carousel-pic"/>
                
            </div>
            <div>
                <img src={Stevies2} className="carousel-pic"/>
                
            </div>
            <div>
                <img src={Stevies3} className="carousel-pic"/>
                
            </div>
            
    </Carousel> 
        <div className="footer">
            
        </div>
    </div>
    )
}
}

export default Stevies