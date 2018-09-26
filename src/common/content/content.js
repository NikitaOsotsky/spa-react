import React, { Component } from 'react';
import {
  Route
} from "react-router-dom";
import './content.css';

class Content extends Component {
  constructor(props) {
    const obj = props.pagesName;
    super(props);
    this.state = {
      data: []
    };
    this.items = props.items.map((item)=> {
      if (item === 'Home') {
        return   <Route key={item} exact path={"/"} component={obj[item]} /> /*exact*/
      }
      if (item === 'News') {
        this.loadData();
      }
      return   <Route key={item} path={"/"+item} component={obj[item]} /> /*exact*/
      }
    );

    console.log(this.items);
    console.log(this.props.requestAddress);
  }

  loadData() {
    fetch(this.props.requestAddress)
      .then((response) => {
        console.log(response.headers.get('Content-Type'));
        console.log(response.status);

        return response.json();
      })
      .then((data) => {
        this.setState(() => {
          return {data: data};
        });
      })
      .catch( console.log );
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate run");
    console.log(this.state);
    return true;
  }

  render() {
    console.log("render run");
    console.log(this.state);
    return (
      <aside className="switch-content">
        <p>Generic content below!</p>
        {this.items}
      </aside>
    );
  }

}

export default Content;
