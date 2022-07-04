import React, { Component } from "react";
import uniqid from "uniqid";

import "./app.css";
import Header from "./Components/Header.jsx";
import GeneralInfo from "./Components/Generalinfo.jsx";
import EducationInfo from "./Components/Educationinfo.jsx";
import WorkExperience from "./Components/Workexperience.jsx";
import Savebtn from "./Components/Savebtn.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      schoolName: "",
      titleOfStudy: "",
      dateOfStudyFrom: "",
      dateOfStudyTo: "",
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      from: "",
      to: "",
    };
    this.infoSet = this.infoSet.bind(this);
  }

  infoSet = () => {
    this.setState({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      schoolName: this.state.schoolName,
      titleOfStudy: this.state.titleOfStudy,
      dateOfStudyFrom: this.state.dateOfStudyFrom,
      dateOfStudyTo: this.state.dateOfStudyTo,
      companyName: this.state.companyName,
      positionTitle: this.state.positionTitle,
      mainTasks: this.state.mainTasks,
      from: this.state.from,
      to: this.state.to,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div className="form-divs">
          <GeneralInfo />
          <EducationInfo />
          <WorkExperience />
          <br />
          <Savebtn save={this.infoSet} />
        </div>
      </div>
    );
  }
}

export default App;
