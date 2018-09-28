import React, { Component } from 'react';
import './footer.css';
import gitLogo from './img/Octicons-mark-github.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <section className="top-footer">
          <div>
            <img className="spinner" src={this.props.logo} alt="logo"/>
          </div>
          <p><span>{this.props.headline}</span></p>
          <p>
            <div>
              <a href="https://github.com/NikitaOsotsky/spa-react">Link</a>
              <span> to GitHub </span>
            </div>
            <img src={gitLogo} alt="logo"/>
          </p>
        </section>
        <section className="bottom-footer">
        </section>
      </footer>
    );
  }

}

export default Footer;
