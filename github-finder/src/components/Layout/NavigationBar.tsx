import React from "react";
import PropTypes from "prop-types";

interface IProps {
  title?: string;
  icon?: string;
}

const NavigationBar: React.FC<IProps> = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

NavigationBar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavigationBar;
