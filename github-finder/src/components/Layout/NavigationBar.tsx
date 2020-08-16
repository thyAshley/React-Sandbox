import React, { Component } from "react";
import PropTypes from "prop-types";

interface IProps {
  title: string;
  icon: string;
}

class NavigationBar extends Component<IProps> {
  static defaultProps: IProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default NavigationBar;
