import React, { Component } from "react";
import uniqid from "uniqid";

import "./app.css";
import Header from "./Components/Header";
import GeneralInfo from "./Components/Generalinfo";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="form-divs">
          <GeneralInfo />
        </div>
      </div>
    );
  }
}

export default App;
