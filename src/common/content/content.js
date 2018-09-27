import React, { Component } from 'react';
import {
  Route
} from "react-router-dom";
import './content.css';

class Content extends Component {
  constructor(props) {
    const obj = props.pagesName;
    super(props);
    this.items = props.items.map((item)=> {
      if (item === 'Home') {
        return   <Route key={item} exact path={"/"} component={obj[item]} />
      }
      return   <Route key={item} path={"/"+item} component={obj[item]} />
      }
    );
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate in Content run");
    return true;
  }

  render() {
    console.log("render in Content run");
    return (
      <aside className="switch-content">
        <hr/>
        {this.items}
      </aside>
    );
  }

}

export default Content;
