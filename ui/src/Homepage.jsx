import React from 'react';
import { NavLink } from 'react-router-dom';
import RouteList from './RouteList.jsx';

const NavigationBar = () => (
    <nav className="nav-bar">
      <NavLink exact to="/">Go To Homepage</NavLink>
    </nav>
  );
  
  const Homepage = () => (
    <div>
      <NavigationBar />
      <RouteList />
    </div>
  );
  
  export default Homepage;