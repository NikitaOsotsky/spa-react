import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <section className="top-footer">
          <img className="spinner" src={this.props.logo} alt="logo"/>
          <h4>{this.props.headline}</h4>
        </section>
        <section className="bottom-footer">
        </section>
      </footer>
    );
  }

}

export default Footer;
