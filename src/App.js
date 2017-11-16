import React, { Component } from "react";
import "./App.css";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import Roller from "./components/roller";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <Roller text="foo" />
        <Roller text="bar" />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
