import React, { Component } from "react";
import PropTypes from "prop-types";

interface IProps {
  id?: number;
  login?: string;
  avatar_url?: string;
  html_url?: string;
}

class UserItem extends Component<IProps> {
  state = {
    id: this.props.id,
    login: this.props.login,
    avatar_url: this.props.avatar_url,
    html_url: this.props.html_url,
  };
  render() {
    const { login, avatar_url, html_url } = this.state;
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
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
