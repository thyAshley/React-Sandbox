import { createStore } from "redux";
import { todos, rootReducer, RootState } from "./reducer";
import { addTodo, toggleTodo } from "./action";

interface output {
  id: number;
  text: string;
  completed: boolean;
}

describe("redux store integration", () => {
  let store = createStore(rootReducer);
  it("should add 1 todo", () => {
    store.dispatch(addTodo("test input"));
  });
  it("should add a second todo", () => {
    store.dispatch(addTodo("test input"));
    console.log(store.getState());
  });
});
