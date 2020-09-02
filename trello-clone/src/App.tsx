import React from "react";

import Card from "./Card";
import Column from "./Column";
import AddNewItem from "./AddNewItem";
import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate App Scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learning Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Using Static Typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
