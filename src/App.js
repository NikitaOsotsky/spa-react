import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import Sidebar from "./common/sidebar/sidebar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: {
        headline: "SPA-ReactJS"
      },
      sidebar: {},
      footer: {}
    }
  }

  render() {
    return ([
      <Header logo={logo} headline={this.state.header.headline} key="header"/>,
      <main className="main" key="main">
        <article className="main-menu">
          <Sidebar />
          <aside className="switch-content"> </aside>
        </article>
      </main>,
      <Footer key="footer"/>
    ]);
  }
}

export default App;
