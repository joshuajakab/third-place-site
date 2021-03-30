import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "../CSS/app.css";
import "../Fonts/KOMIKAX.ttf";
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home'
import Lounge from '../components/Lounge';
import Thirdplace from '../components/ThirdPlace';
import Stevies from '../components/Stevies';
import Menu from '../components/Menu';
import SignIn from '../components/AdminSignIn';
import SideDrawer from './Sidedrawer/Sidedrawer/Sidedrawer';
import Backdrop from './Sidedrawer/Backdrop/Backdrop';
import DrawerToggleButton from './Sidedrawer/DrawerToggleButton/DrawerToggleButton';
import Toolbar from './Toolbar/Toolbar';
import AdminPage from './AdminPage';
import { checkUserSession } from '../redux/User/user.actions';
import WithAuth from '../hoc/withAuth';





const App = props => {
  

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const dispatch = useDispatch();
   


    const toggleSideDrawer = () => {
        
        setSideDrawerOpen(sideDrawerOpen => !sideDrawerOpen);
        



    };

    

  useEffect(() => {
    dispatch(checkUserSession());
  }, );


  return (
    <div id="mainContainer">
      <div>
                <DrawerToggleButton click={toggleSideDrawer} />
            </div>

            <Toolbar />

            {sideDrawerOpen && [
                <div>
                    <SideDrawer />
                    <Backdrop click={toggleSideDrawer} />
                </div>
            ]}



      <section id="content">
        <Switch>
        
          <Route exact path='/' render={() => (
            <Home />
          )} />

          <Route path='/menu' render={() => (
            <Menu />
          )} />
          
          <Route path='/lounge' render={() => (
            <lounge />
          )} />

          <Route path='/thirdplace' render={() => (
            <Thirdplace />
          )} />
          
          <Route path='/stevies' render={() => (
            <Stevies />
          )} />

          <Route path='/admin' render={() => (
            <SignIn />
          )} />
          
          <Route path='/admin-page' render={() => (
            <WithAuth>
              <AdminPage />
            </WithAuth>
          )} />
          
        </Switch>
      </section>
    </div>
  );
}




export default App;

