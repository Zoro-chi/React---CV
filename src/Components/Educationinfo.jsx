import React { Component } from "react";

import Savebtn from "./Savebtn"
import "../app.css"

class EducationInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: e.target.value,
            titleOfStudy: e.target.value,
            dateOfStudyFrom: e.target.value,
            dateOfStudyTo: e.target.value,
        };
         this.infoSet = this.infoSet.bind(this);
    }
    infoSet = (e) => {
    this.setState({
      schoolName: this.state.schoolName,
      titleOfStudy: this.state.titleOfStudy,
      dateOfStudyFrom: this.state.dateOfStudyFrom,
      dateOfStudyTo: this.state.dateOfStudyTo
    });
    console.log(this.state);
  };

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
            this.setState({ name: e.target.value });
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
            this.setState({ email: e.target.value });
          }}
          style={myStyle}
        />
        <input
          type="text"
          id="dateOfStudyFrom"
          className="input"
          placeholder="Date of Study (From)"
          value={this.state.dateOfStudyFrom}
          onChange={(e) => {
            this.setState({ phone: e.target.value });
          }}
          style={myStyle}
        />
        <input
          type="text"
          id="dateOfStudyTo"
          className="input"
          placeholder="Date of Study (To)"
          value={this.state.dateOfStudyTo}
          onChange={(e) => {
            this.setState({ phone: e.target.value });
          }}
          style={myStyle}
        />
        <Savebtn save={this.infoSet}/>
      </form>
    );
  }
}