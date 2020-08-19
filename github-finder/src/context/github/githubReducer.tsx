import React from "react";
import { GitContext } from "./githubContext";
import * as actionTypes from "../types";

export type loginAction =
  | { type: "SET_LOADING" }
  | { type: "SEARCH_USERS"; payload: [] }
  | { type: "CLEAR_USERS" }
  | { type: "GET_USER"; payload: {} }
  | { type: "GET_REPOS"; payload: [] };

export default (state: GitContext, action: loginAction): GitContext => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_REPOS:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    case actionTypes.SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case actionTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case actionTypes.CLEAR_USERS:
      return {
        ...state,
        loading: false,
        users: [],
      };
    default:
      return state;
  }
};
