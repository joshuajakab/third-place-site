import React, { useState } from 'react';
import Loungeimage from '../Images/lounge-color.svg';
import Thirdplaceimage from '../Images/third-place-color.svg';
import Steviesimage from '../Images/stevies-color.svg';

import Video from '../Videos/Third-Place-22.mp4';


//----------------------ADD FACEBOOK FEED FOR THIRD PLACE AND STEVIES------------------------------------------//


const Home = () => {

    

    return (
      <div className="home">
          
        <video playsInline autoPlay muted loop id="bgvid">
          <source src={Video} type="video/webm" />
          <source src={Video} type="video/mp4" />
        </video>
        
  
        <div id="image-container">
          <button id="the-lounge-img" onClick={event => window.location.href = '/lounge'}>
            <img src={Loungeimage} alt="the-lounge"></img>
          </button>
          <button id="third-place-img" onClick={event => window.location.href = '/thirdplace'}>
            <img src={Thirdplaceimage} alt="third-place"></img>
          </button>
          <button id="stevies-img" onClick={event => window.location.href = '/stevies'}>
            <img src={Steviesimage} alt="stevies"></img>
          </button>
        </div>
        
        
      </div>
    )
  
}; 
  

  export default Home;