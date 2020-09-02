import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const people = ["john", "dave", "jane"];
  return people.map((person) => <p>{person}</p>);
};

ReactDOM.render(<App />, document.getElementById("root"));
