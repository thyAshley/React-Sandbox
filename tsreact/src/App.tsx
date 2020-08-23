import React from "react";

import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Input from "./components/Input";
import ReducerButton from "./components/ReducerButton";
import { GlobalProvider, initialState } from "./components/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <Header title="Hello" isActive />
        <Button
          onClick={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        >
          Hello FC
        </Button>
        <ReducerButton />
        <Input />
      </div>
    </GlobalProvider>
  );
};

export default App;
