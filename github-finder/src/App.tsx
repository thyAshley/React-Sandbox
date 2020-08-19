import React, { useState, Fragment } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import NavigationBar from "./components/Layout/NavigationBar";
import Users from "./components/Users/Users";
import Search from "./components/Users/Search";
import Alert from "./components/Layout/Alert";
import About from "./components/pages/About";
import User from "./components/Users/User";
import GithubActions from "./context/github/githubActions";

interface AlertProps {
  message: string;
  type: string;
}
const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState<AlertProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState(null);

  const searchUserByName = async (username: string) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };

  const getUserRepos = async (username: string) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const setAlertStatus = (message: string, type: string) => {
    setAlert({ message, type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <GithubActions>
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
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setAlertStatus}
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
                  getUser={searchUserByName}
                  user={user}
                  loading={loading}
                  getUserRepos={getUserRepos}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </GithubActions>
  );
};

export default App;
