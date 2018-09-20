import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import './sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.items = props.items.map((item)=> {
      if (item === "Home") {
        return <li key={item}><Link to={"/"}>{item}</Link></li>
      }
      return <li key={item}><Link to={"/"+item}>{item}</Link></li>
    }
    )
  }

  render() {
    return (
      <aside className="sidebar">
        <section>
          <h3>{this.props.headline}</h3>
          <ul>{this.items}</ul>
        </section>
      </aside>
    );
  }

}

export default Sidebar;
