import React from "react";
import RepoItem from "./RepoItem";

type Repos = {
  id: number;
  name: string;
};
interface IProps {
  repos: Repos[];
}

const Repos: React.FC<IProps> = ({ repos }) => {
  return (
    <div>{repos ? repos.map((repo) => <RepoItem key={repo.id} />) : null}</div>
  );
};

export default Repos;
