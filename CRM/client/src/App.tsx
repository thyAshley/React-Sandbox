import React from "react";
import { Switch, Route } from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-green-300">
      <Switch>
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
