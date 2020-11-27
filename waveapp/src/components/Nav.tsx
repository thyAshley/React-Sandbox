import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { INav } from "../types";

const Nav = ({ showLibrary, setShowLibrary }: INav) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setShowLibrary(!showLibrary)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
