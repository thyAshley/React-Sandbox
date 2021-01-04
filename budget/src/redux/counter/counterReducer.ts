import * as actions from "./counterConstant";

export const counterReducer = (
  state: { counter: number } = { counter: 0 },
  action: actions.counterAction
) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        counter: state.counter + action.payload!,
      };
    case actions.RESET:
      return {
        counter: 0,
      };
    case actions.DECREMENT:
      return {
        counter: state.counter - action.payload!,
      };
    default:
      return state;
  }
};
