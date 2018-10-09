import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import Sidebar from "./common/sidebar/sidebar";
import Content from "./common/content/content"
import { Home, Docs, Examples, About, News } from "./importer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: {
        headline: "SPA-ReactJS"
      },
      sidebar: {
        headline: "Menu:",
        items: ["Home", "Docs", "Examples", "About", "News"]
      },
      content: {
        Home: Home,
        Docs: Docs,
        Examples: Examples,
        About: About,
        News: News
      },
      footer: {}
    }
  };

  render() {
    return ([
      <Header headline={this.state.header.headline} key="header"/>,
      <main className="main" key="main">
        <article className="main-menu">
          <Router>
            <div>
            <Sidebar headline={this.state.sidebar.headline} items={this.state.sidebar.items}/>
            <Content headline={this.state.sidebar.headline}
                     items={this.state.sidebar.items}
                     pagesName={this.state.content}
            />
            </div>
          </Router>
        </article>
      </main>,
      <Footer headline={this.state.header.headline} logo={logo} key="footer"/>
        ]);
  }
}

export default App;
