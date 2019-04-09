import React, { Component } from "react";
import "./App.css";
import "fetch";
import Main from "../components/main/index"
import Intro from "../components/Intro/index.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here is where you can find all your beloved series" />
        <Main />
      </div>
    );
  }
}

export default App;
