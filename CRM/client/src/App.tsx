import React from "react";
import { Switch, Route } from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Switch>
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default App;
