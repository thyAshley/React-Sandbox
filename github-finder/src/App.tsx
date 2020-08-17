import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import "./App.css";
import NavigationBar from "./components/Layout/NavigationBar";
import Users from "./components/Users/Users";
import Search from "./components/Users/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  static defaultProps = {
    searchUsers: {},
    clearUsers: {},
    setAlert: {},
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  searchUsers = async (username: string) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    console.log(res.data);
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (message: string, type: string) => {
    this.setState({
      alert: {
        message,
        type,
      },
    });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <NavigationBar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
