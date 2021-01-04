import { createStore, combineReducers } from "redux";
import { filterReducer, expenseReducer } from "./budget/budgetReducer";

const rootReducer = combineReducers({
  expenses: expenseReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
