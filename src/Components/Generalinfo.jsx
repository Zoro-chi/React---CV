import React, { Component } from "react";

import "../app.css";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
      aboutMe: "",
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
          id="phone"
          className="input"
          placeholder="Phone Number"
          value={this.state.phone}
          onChange={(e) => {
            this.setState({ phone: e.target.value });
          }}
          style={myStyle}
          required
        />
        <input
          type="text"
          id="address"
          className="input"
          placeholder="Address"
          value={this.state.address}
          onChange={(e) => {
            this.setState({ address: e.target.value });
          }}
          style={myStyle}
          required
        />
        <textarea
          id="about-me"
          placeholder="Tell us more about yourself"
          rows="5"
          value={this.state.aboutMe}
          onChange={(e) => {
            this.setState({ aboutMe: e.target.value });
          }}
        />
      </form>
    );
  }
}

export default GeneralInfo;
