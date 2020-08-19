import { createContext } from "react";

export interface GitContext {
  users: null;
  user: null;
  repos: null;
  loading: boolean;
}
const initialState: GitContext = {
  users: null,
  user: null,
  repos: null,
  loading: false,
};

const githubContext = createContext<GitContext | any>(initialState);

export default githubContext;
