import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import NavigationBar from "./components/Layout/NavigationBar";
import Users from "./components/Users/Users";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
