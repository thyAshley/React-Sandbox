import React from "react";
import ReactDOM from "react-dom";

const Header = ({ username }) => {
  return <h1>Hello {username}</h1>;
};

ReactDOM.render(
  <div>
    <Header username={"John"} />
  </div>,
  document.getElementById("root")
);
