import React, { useReducer } from "react";
import axios from "axios";
import githubContext, { GitContext } from "./githubContext";
import githubReducer from "./githubReducer";
import * as actionTypes from "../types";
import Users from "../../components/Users/Users";

const initialState: GitContext = {
  users: null,
  user: null,
  repos: null,
  loading: false,
};

const githubActions = (props: any) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);
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

  const searchUserByName = async (username: string) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({
      type: actionTypes.GET_USER,
      payload: res.data,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: actionTypes.CLEAR_USERS,
    });
    setLoading();
  };

  const getUserRepos = async (username: string) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({
      type: actionTypes.GET_REPOS,
      payload: res.data,
    });
  };

  return (
    <githubContext.Provider value={state}>
      {props.children}
    </githubContext.Provider>
  );
};

export default githubActions;
