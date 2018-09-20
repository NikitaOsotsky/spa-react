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
        return   <Route key={item} exact path={"/"} component={obj[item]} /> /*exact*/
      }
      return   <Route key={item} path={"/"+item} component={obj[item]} /> /*exact*/
      }
    );
    console.log(this.items);
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
