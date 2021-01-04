export const increment = (inc: number = 1) => {
  return {
    type: "INCREMENT",
    payload: inc,
  };
};

export const decrement = (dec: number = 1) => {
  return {
    type: "DECREMENT",
    payload: dec,
  };
};
