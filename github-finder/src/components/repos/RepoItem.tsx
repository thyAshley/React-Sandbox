import React from "react";

interface IProps {
  repo: {
    html_url: string;
    name: string;
  };
}

const RepoItem: React.FC<IProps> = ({ repo }) => {
  return (
    repo && (
      <div className="card">
        <h3>
          <a href={repo.html_url}>{repo.name}</a>
        </h3>
      </div>
    )
  );
};

export default RepoItem;
