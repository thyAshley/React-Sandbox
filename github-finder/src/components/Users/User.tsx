import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import Spinner from "../Layout/Spinner";

interface MatchParams {
  username: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
  getUser: Function;
  user: {
    login: string;
    name: string;
    avatar_url: string;
    location: string;
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

export class User extends Component<IProps> {
  componentDidMount() {
    const { username } = this.props.match.params;
    this.props.getUser(username);
  }
  render() {
    const { user, loading } = this.props;
    return loading || !user ? <Spinner /> : <div>{user.name}</div>;
  }
}

export default User;
