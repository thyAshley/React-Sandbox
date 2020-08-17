import React, { Fragment } from "react";

import spinner from "./spinner.gif";

const spinnerStyle = {
  width: "200px",
  margin: "auto",
  display: "block",
};

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading..." style={spinnerStyle} />
    </Fragment>
  );
};

export default Spinner;
