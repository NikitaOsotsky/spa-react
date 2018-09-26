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

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate in News run");

    return true;
  }

  render() {
    console.log("render in News run");
    console.log(this.state.data);
    if (!this.state.data) return null;

    return (
      <div className="news">

      </div>
    );
  }

}

export default News;
