import React, { Component } from 'react';
import './news.css';
import {Link, Route} from "react-router-dom";
import Spinner from '../../common/spinner/spinner';
import Pagination from "../../common/pagination/pagination";

class News extends Component {
  constructor(props) {
    super(props);
    this.loadData();
    this.state = {
      data: undefined,
      filter: undefined,
      itemsOn: 6
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
    //TODO:
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
            <label>Filter:
              <input onChange={(e)=> this.inputHandler(e)} type="text" name="filter-box" required
                   minLength="1" maxLength="4"
                   placeholder="Enter first letters"/>
            </label>
            <label>Items on page:
              <input onChange={(e)=> this.itemsCountHandler(e)} type="number" name="items-count" required
                   min="4" max="10" defaultValue="6"
                   />
            </label>
          </div>,
          <Pagination key="component-pagination" collection={this.items} itemsOn={this.state.itemsOn}/>]
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
  itemsCountHandler(e) {
    const filterValue = e.target.value;
    this.setState(() => {
      return {itemsOn: filterValue};
    });
  }

}

export default News;
