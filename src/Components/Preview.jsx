import React, { Component } from "react";

import "../app.css";

export class Preview extends Component {
  render() {
    const { previewState } = this.props;
    return (
      <>
        <div className="p-general">
          <h2> {previewState.name} </h2>
          <h4> {previewState.email} </h4>
          <h4> {previewState.phone} </h4>
          <h4> {previewState.address} </h4>
          <section> {previewState.aboutMe} </section>
        </div>
        <div className="p-education">
          <h4> Education </h4>
          <h5>
            {previewState.titleOfStudy}, {previewState.schoolName}
          </h5>
          <span>
            {previewState.dateOfStudyFrom} to {previewState.dateOfStudyTo}
          </span>
          <section> {previewState.addInfo} </section>
        </div>
        <div className="p-work">
          <h4> Employment </h4>
          <h5>
            {previewState.positionTitle} at {previewState.companyName}
          </h5>
          <span>
            {previewState.from} to {previewState.to}
          </span>
          <div className="p-work-tasks">
            <p> {previewState.mainTasks} </p>
          </div>
        </div>
      </>
    );
  }
}

export default Preview;
