import React from "react";

interface IProps {
  alert: {
    type: string;
    message: string;
  } | null;
}

const Alert: React.FC<IProps> = ({ alert }) => {
  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.message}
      </div>
    )
  );
};

export default Alert;
