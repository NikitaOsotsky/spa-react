import React, { Component } from 'react';
import './news.css';
import {Link, Route} from "react-router-dom";
import Spinner from '../../common/spinner/spinner';
import cn from 'classnames';

class News extends Component {
  constructor(props) {
    super(props);
    this.loadData();
    this.state = {
      data: undefined,
      filter: undefined,
      page: 0
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
      if (!items[i]) {
        items.splice(i, 1);
        i--;
        continue;
      }
      if (i % 8 || i === 0) {
        this.newItems[j].push(items[i]);
      } else {
        j++;
        this.newItems[j] = [];
        this.newItems[j].push(items[i]);
      }
    }
    return this.newItems;
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
    this.items = this.breakToPages(this.items);
    this.pagination = this.items.map((item, i)=> {
      let liType = 'default';
      if (i === this.state.page) liType = 'active';
      const liClass = cn({
        [`li-${liType}`]: true,
      });
        return (
          <li className={liClass} key={i + 1} onClick={() => {
            this.setState(() => {
              return {page: i};
            });
          }}>
            {i + 1}
          </li>
        )
      }
    );
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
          this.items[this.state.page],
          <div key="pagination" className="pagination">
            <ul>{this.pagination}</ul>
          </div>]
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
