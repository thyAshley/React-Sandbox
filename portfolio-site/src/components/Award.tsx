import React from "react";
import styled from "styled-components";

interface IAwardProps {
  title: string;
  description: string;
}

const Award = ({ title, description }: IAwardProps) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.6rem;
  }
  .line {
    background: #23d997;
    height: 0.5rem;
    margin: 0 0.1rem;
    width: 100%;
  }
`;

export default Award;
