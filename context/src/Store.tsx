import React, { createContext, useReducer } from "react";
import { IState, IAction } from "./interface";

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        episodes: action.payload,
      };
    case "ADD_FAV":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FAV":
      let result = state.favourites.filter((ep) => ep !== action.payload);
      return {
        ...state,
        favourites: result,
      };
    default:
      return state;
  }
};

export const StoreProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
