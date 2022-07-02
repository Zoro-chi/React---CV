import React, { Component } from "react";
import uniqid from "uniqid";

import "../app.css";
import Savebtn from "./Savebtn";

class Generalinfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form className="form">
        <input
          type="text"
          id="name"
          className="input"
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          id="email"
          className="input"
          placeholder="E-mail"
          required
        />
        <input
          type="tel"
          id="name"
          className="input"
          placeholder="Phone Number"
          required
        />
        <Savebtn />
      </form>
    );
  }
}

export default Generalinfo;
