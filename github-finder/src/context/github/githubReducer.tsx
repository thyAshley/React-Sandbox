import React from "react";
import { GitContext } from "./githubContext";
import * as actionTypes from "../types";

export default (state: GitContext, action: any) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
