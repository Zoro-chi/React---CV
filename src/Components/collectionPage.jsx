import React, { Component } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

import "../app.css";
import Header from "./Header.jsx";
import GeneralInfo from "./Generalinfo.jsx";
import EducationInfo from "./Educationinfo.jsx";
import WorkExperience from "./Workexperience.jsx";
import Previewbtn from "./Previewbtn.jsx";

class CollectionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: props.previewState,
      save: props.save,
    };
  }

  render() {
    return (
      <div className="collection-page">
        <Header />
        <div className="form-divs">
          <GeneralInfo />
          <EducationInfo />
          <WorkExperience />
          <div className="buttons-div">
            <Link to="/preview">
              <Previewbtn save={this.state.save} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CollectionPage;
