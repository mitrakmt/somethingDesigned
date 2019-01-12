import React, { Component } from "react";

import Home from "containers/home/home";

import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Home />
      </div>
    );
  }
}

export default App;
