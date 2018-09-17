import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: {},
      sidebar: {},
      footer: {}
    }
  }

  render() {
    return ([
      <Header logo={logo}/>,
      <main className="main">
        <article className="main-menu">
          <Sidebar />
          <aside className="switch-content"> </aside>
        </article>
      </main>,
      <Footer />
    ]);
  }
}

export default App;
