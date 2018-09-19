import React, { Component } from 'react';
import {
  Route,
} from "react-router-dom";
import './content.css';
import Home from "../dinamic_content/home";

class Content extends Component {
  constructor(props) {
    super(props);
    this.items = props.items.map((item)=>
      <Route key={item} path={"/"+item} component={Home} /> /*exact*/
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
