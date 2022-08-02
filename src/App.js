import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

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
      address: "",
      aboutMe: "",
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
    this.saveChangeHandler = this.saveChangeHandler.bind(this);
  }

  saveChangeHandler = () => {
    this.setState({
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      phone: document.querySelector("#phone").value,
      address: document.querySelector("#address").value,
      aboutMe: document.querySelector("#about-me").value,
      schoolName: document.querySelector("#schoolName").value,
      titleOfStudy: document.querySelector("#titleOfStudy").value,
      dateOfStudyFrom: document.querySelector("#dateOfStudyFrom").value,
      dateOfStudyTo: document.querySelector("#dateOfStudyTo").value,
      addInfo: document.querySelector("#additionalInfo").value,
      companyName: document.querySelector("#companyName").value,
      positionTitle: document.querySelector("#positionTitle").value,
      mainTasks: document.querySelector("#mainTasks").value,
      from: document.querySelector("#from").value,
      to: document.querySelector("#to").value,
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={<CollectionPage onSave={this.saveChangeHandler} />}
            />
            <Route
              path="/preview"
              element={<PreviewPage previewState={this.state} />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
