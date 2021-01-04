import { createStore } from "redux";

const store = createStore(
  (
    state: { counter: number } = { counter: 0 },
    action: { type: any; payload?: number }
  ) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          counter: state.counter + action.payload!,
        };
      case "RESET":
        return {
          counter: 0,
        };
      case "DECREMENT":
        return {
          counter: state.counter - action.payload!,
        };
      default:
        return state;
    }
  }
);

export default store;
