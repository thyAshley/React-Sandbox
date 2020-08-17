import React from "react";

import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

type User = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

interface IProps {
  users: User[];
  loading: boolean;
}

const Users = ({ users, loading }: IProps) => {
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem
          key={user.id}
          login={user.login}
          avatar_url={user.avatar_url}
          html_url={user.html_url}
        />
      ))}
    </div>
  );
};

export default Users;
