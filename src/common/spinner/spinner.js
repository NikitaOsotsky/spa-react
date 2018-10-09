import React, { Component } from 'react';
import './spinner.css';

class Spinner extends Component {
  render() {
    return (
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
  }

}

export default Spinner;
