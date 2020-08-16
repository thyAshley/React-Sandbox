import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/Layout/NavigationBar";
import Users from "./components/Users/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
