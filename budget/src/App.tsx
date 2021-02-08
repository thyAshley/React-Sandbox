import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import {
  addExpense,
  removeExpense,
  updateExpense,
  filterExpense,
} from "./redux/budget/budgetAction";

import Header from "./components/Header";
import EditScreen from "./screens/EditScreen";
import ExpenseScreen from "./screens/ExpensesScreen";
import HomeScreen from "./screens/HomeScreen";
import PageNotFound from "./screens/PageNotFound";

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
