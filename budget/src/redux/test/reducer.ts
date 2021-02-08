import { combineReducers } from "redux";

export const ADD_TODO = "ADD_TODO";

export interface AddTodo {
  type: typeof ADD_TODO;
  id: number;
  text: string;
}

export interface ToggleTodo {
  type: "TOGGLE_TODO";
  id: number;
  completed: boolean;
}

interface state {
  id: number;
  text?: string;
  completed?: boolean;
}

interface output {
  id: number;
  text: string;
  completed: boolean;
}

type dummy = output[];
type todosInterface = AddTodo | ToggleTodo;

export const todos = (state: output[] = [], action: todosInterface): dummy => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        +todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};
export const second = (state: state[] = [], action: todosInterface) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        +todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  todos: todos,
  dummy: second,
});
export type RootState = ReturnType<typeof rootReducer>;
