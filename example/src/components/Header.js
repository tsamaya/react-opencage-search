import React from 'react';
import logo from '../assets/images/opencage-white.svg';
import './Header.css';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      OpenCage <b>React Search</b> component.
    </p>
  </header>
);

export default Header;
