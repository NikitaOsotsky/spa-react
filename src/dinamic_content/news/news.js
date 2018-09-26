import React, { Component } from 'react';
import './news.css';
import {Link, Route} from "react-router-dom";

class News extends Component {
  constructor(props) {
    super(props);
    this.loadData();
    this.state = {
      data: undefined
    };
  }

  loadData() {
    fetch("http://localhost:3004/data")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState(() => {
          return {data: data};
        });
      })
      .catch( console.log );
  }

  render() {
    if (!this.state.data) return (
      <div className="news">
        <div className="lds-roller">
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
      </div>
    );

    //TODO: data constructing
    this.items = this.state.data.map((item) =>
    <div className="article short-box" key={item.name}>
      <h3>{item.name}</h3>
      <p>
        {item.text}
        <Link to={"News/"+item.name.toLowerCase()}> more...</Link>
      </p>
    </div>
    );
    this.routs = this.state.data.map((item) =>
      <Route key={item.name} path={'/News/'+item.name.toLowerCase()} render={()=>
        <div className="article">
          <h3>{item.name}</h3>
          <p>
            {item.text}
          </p>
        </div>
      }/>
    );
    //TODO:

    return (
      <div className="news">
        <Route key="default" path={'/News'} exact render={()=> this.items} />
        {this.routs}
      </div>
    );
  }

}

export default News;
