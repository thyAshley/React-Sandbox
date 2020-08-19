import React from "react";
import PropTypes from "prop-types";

import RepoItem from "./RepoItem";

interface Repos {
  id: number;
  name: string;
  html_url: string;
}
interface IProps {
  repos: Repos[];
}

const Repos: React.FC<IProps> = ({ repos }) => {
  return (
    <div>
      {repos
        ? repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)
        : null}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
