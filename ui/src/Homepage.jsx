import React from 'react';
import { NavLink } from 'react-router-dom';
import RouteList from './RouteList.jsx';

const NavigationBar = () => (
    <nav className="nav-bar">
      <NavLink className="submit-button submit-button-dark" exact to="/">Go To Homepage</NavLink>
    </nav>
  );
  
  /* Home component which shows the static Navbar and the Contents */
  const Homepage = () => (
    <div>
      <NavigationBar />
      <RouteList />
    </div>
  );
  
  export default Homepage;