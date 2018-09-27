import React, { Component } from 'react';
import './news.css';
import {Link, Route} from "react-router-dom";

class News extends Component {
  constructor(props) {
    super(props);
    this.loadData();
    this.state = {
      data: undefined,
      filter: undefined
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
    this.items = this.state.data.map((item) => {
      if (!this.state.filter || item.name.toLowerCase().includes(this.state.filter.toLowerCase())) return (
      <div className="article short-box" key={item.name}>
      <h3>{item.name}</h3>
      <p>
        {item.text}
        <Link to={"News/"+item.name.toLowerCase()}> more...</Link>
      </p>
    </div> )
    });
    this.routs = this.state.data.map((item) =>
      <Route key={item.name} path={'/News/' + item.name.toLowerCase()} render={() =>
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
        <Route key="default" path={'/News'} exact render={()=>
          [<div key="filter" className="filter">
            <input onChange={(e)=> this.inputHandler(e)} type="text" id="filter-box" name="filter-box" required
                   minLength="1" maxLength="4"
                   placeholder="Enter first letters"/>
          </div>,
          this.items]
        } />
        {this.routs}
      </div>
    );
  }

  inputHandler(e) {
    const filterValue = e.target.value;
    console.log(filterValue);
    this.setState(() => {
      return {filter: filterValue};
    });
  }

}

export default News;
