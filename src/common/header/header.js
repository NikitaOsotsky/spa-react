import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={this.props.logo} alt="logo"/>
        <h1>{this.props.headline}</h1>
      </header>
    );
  }

}

export default Header;
