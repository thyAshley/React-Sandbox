import { AddTodo, ToggleTodo } from "./reducer";
let nextToDoId = 0;

export const addTodo = (text: string): AddTodo => ({
  type: "ADD_TODO",
  id: nextToDoId++,
  text,
});

export const setVisibility = (filter: string) => ({
  type: "SET_VISIBILITY",
  filter,
});
export const toggleTodo = (id: string): ToggleTodo => ({
  type: "TOGGLE_TODO",
  id,
});
export const VisilbityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
