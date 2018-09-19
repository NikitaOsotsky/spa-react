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
      sidebar: {
        headline: "Menu:",
        items: ["Home", "Docs", "Examples", "About"]
      }
      ,
      footer: {}
    }
  };

  render() {
    return ([
      <Header logo={logo} headline={this.state.header.headline} key="header"/>,
      <main className="main" key="main">
        <article className="main-menu">
          <Sidebar headline={this.state.sidebar.headline} items={this.state.sidebar.items}/>
          <aside className="switch-content"> </aside>
        </article>
      </main>,
      <Footer headline={this.state.header.headline} logo={logo} key="footer"/>
    ]);
  }
}

export default App;
