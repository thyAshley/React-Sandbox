import React from "react";
import PropTypes from "prop-types";

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

const Users: React.FC<IProps> = ({ users, loading }) => {
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
