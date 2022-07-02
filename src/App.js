import React, { Component } from "react";
import uniqid from "uniqid";

import "./app.css";
import Header from "./Components/Header";
import Generalinfo from "./Components/Generalinfo";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="form-divs">
          <Generalinfo />
        </div>
      </div>
    );
  }
}

export default App;
