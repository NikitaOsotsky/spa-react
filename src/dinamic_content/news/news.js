import React, { Component } from 'react';
import './news.css';

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
    <div className="article">
      <h3>{item.name}</h3>
      <p>{item.text}</p>
    </div>
    );

    return (
      <div className="news">
        {this.items}
      </div>
    );
  }

}

export default News;
