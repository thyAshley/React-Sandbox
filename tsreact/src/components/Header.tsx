import React from "react";

type IProps = {
  title: string;
  isActive?: boolean;
};

const Header = ({ title, isActive = false }: IProps) => {
  return (
    <div>
      <h1>title</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};

export default Header;
