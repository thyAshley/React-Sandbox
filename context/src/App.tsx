import React, { Fragment, Suspense, useContext } from "react";
import { Link, Switch, Route } from "react-router-dom";
import FavPage from "./FavPage";

import HomePage from "./HomePage";
import { Store } from "./Store";

const App = (props: any): JSX.Element => {
  const { state } = useContext(Store);
  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favourite">Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/favourite">
          <FavPage />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
