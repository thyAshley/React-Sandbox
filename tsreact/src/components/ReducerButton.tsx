import React, { Dispatch, useReducer } from "react";

type IAction = {
  type: string;
  payload?: {};
};

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
  return (
    <div>
      {state?.rValue && <h1>Visible</h1>}
      <button onClick={() => dispatch({ type: "one" })}>Action One</button>
      <button onClick={() => dispatch({ type: "two" })}>Action Two</button>
    </div>
  );
};

export default ReducerButton;
