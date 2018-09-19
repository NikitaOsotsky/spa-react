import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  HashRouter
} from "react-router-dom";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import Sidebar from "./common/sidebar/sidebar";
import Content from "./common/content/content"
import Home from "./dinamic_content/home/home";
import Docs from "./dinamic_content/docs/docs";
import Examples from "./dinamic_content/examples/examples";
import About from "./dinamic_content/about/about";

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
      },
      content: {
        Home: Home,
        Docs: Docs,
        Examples: Examples,
        About: About
      },
      footer: {}
    }
  };

  render() {
    return (
      <HashRouter>
        <div>
      <Header logo={logo} headline={this.state.header.headline} key="header"/>
      <main className="main" key="main">
        <article className="main-menu">
          <Sidebar headline={this.state.sidebar.headline} items={this.state.sidebar.items}/>
          <Content headline={this.state.sidebar.headline} items={this.state.sidebar.items} pagesName={this.state.content}/>
        </article>
      </main>
      <Footer headline={this.state.header.headline} logo={logo} key="footer"/>
        </div>
      </HashRouter>
        );
  }
}

export default App;
