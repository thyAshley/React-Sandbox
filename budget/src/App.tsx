import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./redux/store";
import { decrement, increment } from "./redux/counter/counterAction";

import Header from "./components/Header";
import EditScreen from "./screens/EditScreen";
import ExpenseScreen from "./screens/ExpensesScreen";
import HomeScreen from "./screens/HomeScreen";
import PageNotFound from "./screens/PageNotFound";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(decrement(5));
store.dispatch(increment(10));
store.dispatch(increment(5));

const App = () => {
  return (
    <Router>
      <Header />
      <div>Hello World</div>
      <Switch>
        <Route path="/add" component={ExpenseScreen} />
        <Route path="/edit" component={EditScreen} />
        <Route path="/" exact component={HomeScreen} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
