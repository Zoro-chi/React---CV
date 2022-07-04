import React, { Component } from "react";
import uniqid from "uniqid";

import "../app.css";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  render() {
    const myStyle = {
      border: "2px solid dodgerblue",
    };

    return (
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2> General Info </h2>
        <input
          type="text"
          id="name"
          className="input"
          placeholder="Full Name"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
          style={myStyle}
          required
        />
        <input
          type="email"
          id="email"
          className="input"
          placeholder="E-mail"
          value={this.state.email}
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
          style={myStyle}
          required
        />
        <input
          type="tel"
          id="name"
          className="input"
          placeholder="Phone Number"
          value={this.state.phone}
          onChange={(e) => {
            this.setState({ phone: e.target.value });
          }}
          style={myStyle}
          required
        />
      </form>
    );
  }
}

export default GeneralInfo;
