import React, { useContext, Fragment } from "react";
import { Store } from "./Store";

const App = (): JSX.Element => {
  const store = useContext(Store);
  return (
    <Fragment>
      {console.log(store)}
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode</p>
    </Fragment>
  );
};

export default App;
