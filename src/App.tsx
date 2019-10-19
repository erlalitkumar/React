import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  sum(a: number, b: number): number {
    return a + b;
  }
  render() {
    return (
      <div>
        <h1>Hello world {this.sum(5,7)}</h1>
      </div>
    );
  }
}

export default App;
