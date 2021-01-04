import * as actions from "./counterConstant";

export const increment = (): actions.increment => {
  return {
    type: actions.INCREMENT,
    payload: 1,
  };
};

export const decrement = (): actions.decrement => {
  return {
    type: actions.DECREMENT,
    payload: 1,
  };
};
