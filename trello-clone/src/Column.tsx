import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text?: string;
};

const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};

export default Column;
