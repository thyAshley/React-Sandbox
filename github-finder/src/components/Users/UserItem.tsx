import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

interface IProps {
  login: string;
  avatar_url: string;
  html_url: string;
}

const UserItem: React.FC<IProps> = ({ login, avatar_url, html_url }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
};

export default UserItem;
