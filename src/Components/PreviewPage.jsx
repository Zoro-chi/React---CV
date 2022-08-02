import React, { Component } from "react";
import { Link } from "react-router-dom";

import Preview from "./Preview.jsx";
import "../app.css";

class PreviewPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const myStyle = {
      display: "flex",
      flexFlow: "column",
      width: "70vw",
      justifyContent: "center",
      gap: "3rem",
      background: "beige",
    };
    const { previewState } = this.props;
    return (
      <div style={myStyle}>
        <Preview previewState={previewState} />
        <div className="buttons-div">
          <Link to="/">
            <button> Edit </button>
          </Link>
          <button
            onClick={() => {
              console.log(previewState);
            }}
          >
            show
          </button>
        </div>
      </div>
    );
  }
}

export default PreviewPage;
