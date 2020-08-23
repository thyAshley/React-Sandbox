import React, { createContext, useReducer } from "react";

type IAction = { type: "one" } | { type: "two" } | { type: "three" };

type IState = {
  rValue: boolean;
  turnOn?: () => void;
  turnOff?: () => void;
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

export const initialState: IState = {
  rValue: true,
  turnOn: () => {},
  turnOff: () => {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        rValue: state.rValue,
        turnOff: () => dispatch({ type: "one" }),
        turnOn: () => dispatch({ type: "two" }),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// const reducer = (state: IState, action: IAction) => {
//   switch (action.type) {
//     case "one":
//       return {
//         ...state,
//         rValue: true,
//       };
//     case "two":
//       return {
//         ...state,
//         rValue: false,
//       };
//     default:
//       return state;
//   }
// };
