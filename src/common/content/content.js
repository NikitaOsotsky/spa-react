import React, { Component } from 'react';
import {
  Route,
} from "react-router-dom";
import './content.css';

class Content extends Component {
  constructor(props) {
    const obj = props.pagesName;
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
