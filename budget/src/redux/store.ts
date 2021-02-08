import { createStore, combineReducers } from "redux";
import { filterReducer, expenseReducer } from "./budget/budgetReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  expenses: expenseReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

export type RootState = ReturnType<typeof rootReducer>;
