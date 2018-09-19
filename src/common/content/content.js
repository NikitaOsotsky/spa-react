import React, { Component } from 'react';
import {
  Route,
} from "react-router-dom";
import './content.css';
import Home from "../../dinamic_content/home";
import Docs from "../../dinamic_content/docs";
import Examples from "../../dinamic_content/examples";
import About from "../../dinamic_content/about";

const obj = {
  Home: Home,
  Docs: Docs,
  Examples: Examples,
  About: About
};

class Content extends Component {
  constructor(props) {
    super(props);
    this.items = props.items.map((item)=>
      <Route key={item} path={"/"+item} component={obj[item]} /> /*exact*/
    )
  }

  render() {
    return (
      <aside className="switch-content">
        <p>Generic content below!</p>
        {this.items}
      </aside>
    );
  }

}

export default Content;
