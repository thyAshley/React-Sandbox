import React, { useReducer } from "react";
import axios from "axios";
import githubContext, { GitContext } from "./githubContext";
import githubReducer from "./githubReducer";
import * as actionTypes from "../types";

const initialState: GitContext = {
  users: null,
  user: null,
  repos: null,
  loading: false,
};

const githubActions: React.FC = (props: any) => {
  const [state, dispatch] = useReducer<GitContext | any>(
    githubReducer,
    initialState
  );
  const setLoading = () => dispatch({ type: actionTypes.SET_LOADING });

  const searchUsers = async (username: string) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({
      type: actionTypes.SEARCH_USERS,
      payload: res.data.items,
    });
  };

  return (
    <githubContext.Provider value={{ state, dispatch }}>
      {props.children}
    </githubContext.Provider>
  );
};

export default githubActions;
