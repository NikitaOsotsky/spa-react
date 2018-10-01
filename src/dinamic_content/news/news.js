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
      page: 0,
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

  breakToPages(items) {
    const a = this.state.itemsOn || 6;
    this.newItems = [[]];
    for (let i = 0, j = 0; i < items.length; i++) {
      if (!items[i]) {
        items.splice(i, 1);
        i--;
        continue;
      }
      if (i % a || i === 0) {
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
  itemsCountHandler(e) {
    const filterValue = e.target.value;
    this.setState(() => {
      return {itemsOn: filterValue};
    });
  }

}

export default News;
