import React, { Component } from "react";

import "../app.css";

class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      from: "",
      to: "",
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
        <h2> Work Experience </h2>
        <input
          type="text"
          id="companyName"
          className="input"
          placeholder="Company Name"
          value={this.state.companyName}
          onChange={(e) => {
            this.setState({ companyName: e.target.value });
          }}
          style={myStyle}
        />
        <input
          type="text"
          id="positionTitle"
          className="input"
          placeholder="Position Title"
          value={this.state.positionTitle}
          onChange={(e) => {
            this.setState({ positionTitle: e.target.value });
          }}
          style={myStyle}
        />
        <textarea
          id="mainTasks"
          className="textarea"
          rows="6"
          placeholder="Main Tasks"
          value={this.state.mainTasks}
          onChange={(e) => {
            this.setState({ mainTasks: e.target.value });
          }}
          style={myStyle}
        />
        <input
          type="date"
          id="from"
          className="input"
          placeholder="From"
          value={this.state.from}
          onChange={(e) => {
            this.setState({ from: e.target.value });
          }}
          style={myStyle}
        />
        <input
          type="date"
          id="to"
          className="input"
          placeholder="To"
          value={this.state.to}
          onChange={(e) => {
            this.setState({ to: e.target.value });
          }}
          style={myStyle}
        />
      </form>
    );
  }
}

export default WorkExperience;
