import React, { useReducer, useRef } from "react";
import useClickOutside from "./useClickOutside";
type IAction = { type: "one" } | { type: "two" } | { type: "three" };

type IState = {
  rValue: boolean;
};

const initialState: IState = {
  rValue: true,
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "one":
      return {
        ...state,
        rValue: true,
      };
    case "two":
      return {
        ...state,
        rValue: false,
      };
    default:
      return state;
  }
};

const ReducerButton = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef<HTMLDivElement>(null!);
  useClickOutside(ref, () => {
    console.log("clicked outside");
  });
  return (
    <div ref={ref}>
      {state?.rValue && <h1>Visible</h1>}
      <button onClick={() => dispatch({ type: "one" })}>Action One</button>
      <button onClick={() => dispatch({ type: "two" })}>Action Two</button>
      <button onClick={() => dispatch({ type: "three" })}>Action Three</button>
    </div>
  );
};

export default ReducerButton;
