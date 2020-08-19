import React, { Component, Fragment } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import NavigationBar from "./components/Layout/NavigationBar";
import Users from "./components/Users/Users";
import Search from "./components/Users/Search";
import Alert from "./components/Layout/Alert";
import About from "./components/pages/About";
import User from "./components/Users/User";

class App extends Component {
  state = {
    users: [],
    user: null,
    loading: false,
    alert: null,
  };

  static defaultProps = {
    searchUsers: Function,
    clearUsers: Function,
    setAlert: Function,
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

  searchUserByName = async (username: string) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    console.log(res);
    this.setState({ user: res.data, loading: false });
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

    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  render() {
    const { users, loading, alert, user } = this.state;
    return (
      <div className="App">
        <NavigationBar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:username"
              render={(props) => (
                <User
                  {...props}
                  getUser={this.searchUserByName}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
