import React from "react";

import Column from "./Column";
import AddNewItem from "./AddNewItem";
import { AppContainer } from "./styles";
import { useAppState } from "./AppStateContext";

function App() {
  const { state } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, idx) => {
        return <Column text={list.text} key={list.id} index={idx} />;
      })}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
