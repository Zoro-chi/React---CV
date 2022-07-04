import React, { Component } from "react";

import "../app.css";

class EducationInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudyFrom: "",
      dateOfStudyTo: "",
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
        <h2> Educational Info </h2>
        <input
          type="text"
          id="schoolName"
          className="input"
          placeholder="School Name"
          value={this.state.schoolName}
          onChange={(e) => {
            this.setState({ schoolName: e.target.value });
          }}
          style={myStyle}
        />
        <input
          type="text"
          id="titleOfStudy"
          className="input"
          placeholder="Title Of Study"
          value={this.state.titleOfStudy}
          onChange={(e) => {
            this.setState({ titleOfStudy: e.target.value });
          }}
          style={myStyle}
        />
        <input
          type="date"
          id="dateOfStudyFrom"
          className="input"
          placeholder="Date of Study (From)"
          value={this.state.dateOfStudyFrom}
          onChange={(e) => {
            this.setState({ dateOfStudyFrom: e.target.value });
          }}
          style={myStyle}
        />
        <input
          type="date"
          id="dateOfStudyTo"
          className="input"
          placeholder="Date of Study (To)"
          value={this.state.dateOfStudyTo}
          onChange={(e) => {
            this.setState({ dateOfStudyTo: e.target.value });
          }}
          style={myStyle}
        />
      </form>
    );
  }
}

export default EducationInfo;
