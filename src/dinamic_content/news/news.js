import React, { Component } from 'react';
import './news.css';
import {Link, Route} from "react-router-dom";
import Spinner from '../../common/spinner/spinner';

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

  breakToPages(items) {
    this.newItems = [[]];
    for (let i = 0, j = 0; i < items.length; i++) {
      if (i % 8 || i === 0) {
        this.newItems[j].push(items[i]);
      } else {
        j++;
        this.newItems[j] = [];
        this.newItems[j].push(items[i]);
      }
    }
    console.log(this.newItems);
  }

  render() {
    if (!this.state.data) return (
      <Spinner />
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
    </div> );
      return null;
    });
    this.breakToPages(this.items);
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
    this.setState(() => {
      return {filter: filterValue};
    });
  }

}

export default News;
