/**
 * input props.collection = collection $$typeof: Symbol(react.element)
 * input props.itemsOn = number, items count on one page
 * output [collection[first or selectedPage], paginationPanel]
 */
import React, { Component } from 'react';
import './pagination.css';
import cn from "classnames";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: props.collection,
      itemsOnPage: props.itemsOn,
      activePage: 0
    };
  }

/*Updating*/
  componentWillReceiveProps(nextProps) {
/*change text in filter, change count of blocks*/
    if (this.props.collection !== nextProps.collection) this.setState({activePage: 0, collection: nextProps.collection});
    if (this.props.itemsOnPage !== nextProps.itemsOn) this.setState({itemsOnPage: nextProps.itemsOn});
  }

  componentWillUpdate() {
/*change page, change text in filter, change count of blocks*/
  }
/*Updating*/

  render() {
    this.calculatePagination();
    return([
      this.items[this.state.activePage],
      <div key="pagination" className="pagination">
        <ul>{this.pagination}</ul>
      </div>
    ]);
  }

/*Common functions*/
  breakToPages(items) {
    const a = this.state.itemsOnPage || 6;
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

  calculatePagination() {
    this.items = this.breakToPages(this.state.collection);
    this.pagination = this.items.map((item, i)=> {
        let liType = 'default';
        if (i === this.state.activePage) liType = 'active';
        const liClass = cn({
          [`li-${liType}`]: true,
        });
        return (
          <li className={liClass} key={i + 1} onClick={() => {
            this.setState(() => {
              return {activePage: i};
            });
          }}>
            {i + 1}
          </li>
        )
      }
    );
  }
}

export default Pagination;
