import React, { Component } from "react";
import UserItem from "./UserItem";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

type ObjClass = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

interface IProps {
  users: ObjClass[];
  loading: boolean;
}

export class Users extends Component<IProps> {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem
            key={user.id}
            login={user.login}
            avatar_url={user.avatar_url}
            html_url={user.html_url}
          />
        ))}
      </div>
    );
  }
}

export default Users;
