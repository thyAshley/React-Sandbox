import React, { useEffect, Fragment } from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

import Spinner from "../Layout/Spinner";
import Repos from "../repos/Repos";

interface MatchParams {
  username: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
  getUser: Function;
  getUserRepos: Function;
  repos: null | [];
  user: {
    login: string;
    name: string;
    avatar_url: string;
    location: string;
    company: string;
    bio: string;
    blog: string;
    html_url: string;
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number;
    hireable: string;
  } | null;
  loading: boolean;
}

const User: React.FC<IProps> = ({
  match,
  repos,
  getUserRepos,
  getUser,
  user,
  loading,
}) => {
  const { username } = match.params;
  useEffect(() => {
    getUser(username);
    getUserRepos(username);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;
  return (
    user && (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
        Hireable:{" "}
        {user.hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="round-img"
              style={{ width: "150px" }}
            />
            <h1>{user.name}</h1>
            <p>Location: {user.location}</p>
          </div>
          <div>
            {user.bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{user.bio}</p>
              </Fragment>
            )}
            <a href={user.html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                <Fragment>
                  <strong>Username: </strong>
                  <span>{user.name}</span>
                </Fragment>
              </li>
              <li>
                {user.company && (
                  <Fragment>
                    <strong>Company: </strong>
                    <span>{user.company}</span>
                  </Fragment>
                )}
              </li>
              <li>
                {user.blog && (
                  <Fragment>
                    <strong>Website: </strong>
                    <a href={`https://www.${user.blog}`}>{user.blog}</a>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {user.followers}</div>
          <div className="badge badge-success">Following: {user.following}</div>
          <div className="badge badge-light">
            Public Repos: {user.public_repos}
          </div>
          <div className="badge badge-dark">
            Public Gists: {user.public_gists}
          </div>
        </div>
        {repos && <Repos repos={repos} />}
      </Fragment>
    )
  );
};

export default User;
