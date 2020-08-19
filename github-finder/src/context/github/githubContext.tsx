import { createContext } from "react";

export interface GitContext {
  users: [] | null;
  user: {} | null;
  repos: [] | null;
  loading: boolean | null;
  searchUsers?: Function;
}
const initialState: GitContext = {
  users: null,
  user: null,
  repos: null,
  loading: false,
};

const githubContext = createContext<GitContext>(initialState);

export default githubContext;
