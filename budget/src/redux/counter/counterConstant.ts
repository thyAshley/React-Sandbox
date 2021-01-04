export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export interface increment {
  type: typeof INCREMENT;
  payload: number;
}
export interface decrement {
  type: typeof DECREMENT;
  payload: number;
}
export interface reset {
  type: typeof RESET;
}

export type counterAction = increment | decrement | reset;
