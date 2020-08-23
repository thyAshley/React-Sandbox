import React, { useReducer, useRef, useContext } from "react";

import { GlobalContext } from "./GlobalState";
import useClickOutside from "./useClickOutside";

const ReducerButton = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const { rValue, turnOn, turnOff } = useContext(GlobalContext);

  useClickOutside(ref, () => {
    console.log("clicked outside");
  });
  return (
    <div ref={ref}>
      {rValue && <h1>Visible</h1>}
      <button onClick={turnOn}>Action One</button>
      <button onClick={turnOff}>Action Two</button>
    </div>
  );
};

export default ReducerButton;
