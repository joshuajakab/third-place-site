import React, { Component } from 'react';
import "../CSS/app.css";
import "../Fonts/KOMIKAX.ttf";
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home'
import Lounge from '../components/Lounge';
import Thirdplace from '../components/ThirdPlace';
import Stevies from '../components/Stevies';
import Menu from '../components/Menu';
import SignIn from '../components/AdminSignIn';




function App() {


  return (
    <div id="mainContainer">



      <section id="content">
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route path={'/menu'} component={Menu} />
          <Route path={'/lounge'} component={Lounge} />
          <Route path={'/thirdplace'} component={Thirdplace} />
          <Route path={'/stevies'} component={Stevies} />
          <Route path={'/admin'} component={SignIn} />
          
        </Switch>
      </section>
    </div>
  );
}


export default App;

