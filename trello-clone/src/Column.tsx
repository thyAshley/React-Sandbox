import React from "react";

import AddNewItem from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import Card from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text?: string;
  index: number;
};

const Column = ({ text, index }: React.PropsWithChildren<ColumnProps>) => {
  const { state } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
