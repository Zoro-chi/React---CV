import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../app.css";
import Header from "./Header.jsx";
import GeneralInfo from "./Generalinfo.jsx";
import EducationInfo from "./Educationinfo.jsx";
import WorkExperience from "./Workexperience.jsx";

class CollectionPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onSave } = this.props;
    return (
      <div className="collection-page">
        <Header />
        <div className="form-divs">
          <GeneralInfo />
          <EducationInfo />
          <WorkExperience />
          <div className="buttons-div">
            <Link to="/preview">
              <button onClick={onSave}>Save</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CollectionPage;
