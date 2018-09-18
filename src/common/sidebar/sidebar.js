import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.items = props.items.map((item)=>
      <li key={item}>{item}</li>
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
