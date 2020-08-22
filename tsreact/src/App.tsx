import React from "react";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Input from "./components/Input";
import ReducerButton from "./components/ReducerButton";

const App = () => {
  return (
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
  );
};

export default App;
