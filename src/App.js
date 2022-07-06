import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import uniqid from "uniqid";

import "./app.css";
import CollectionPage from "./Components/collectionPage.jsx";
import PreviewPage from "./Components/PreviewPage.jsx";

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
    this.setState(
      {
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
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <CollectionPage save={this.infoSet} previewState={this.state} />
              }
            />
            <Route
              path="/preview"
              element={<PreviewPage state={this.state} />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
