import React, { Component } from 'react';
import './header.css';
import logo from './img/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div><img src={logo} alt="logo"/></div>
        <h1>No name Company</h1>
      </header>
    );
  }

}

export default Header;
