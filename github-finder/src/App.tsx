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

interface AlertProps {
  message: string;
  type: string;
}
const App = () => {
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const setAlertStatus = (message: string, type: string) => {
    setAlert({ message, type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
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
              <User {...props} getUserRepos={getUserRepos} repos={repos} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
