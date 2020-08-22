import React from "react";

type IProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<IProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
