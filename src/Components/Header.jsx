import React, { Component } from "react";
import uniqid from "uniqid";

import "../app.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <h1> CV BUILDER </h1>
      </header>
    );
  }
}

export default Header;
