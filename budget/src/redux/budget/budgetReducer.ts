import { BudgetAttribute, budgetActions } from "./types";
import * as constant from "./budgetConstant";

const initialState: BudgetAttribute = {
  expenses: [],
  filters: {
    keyword: "rent",
    sortby: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};

export const expenseReducer = (
  state = initialState.expenses,
  action: budgetActions
) => {
  switch (action.type) {
    case constant.ADD_EXPENSE:
      return [...state, action.payload];

    case constant.REMOVE_EXPENSE:
      state = state.filter((expense) => expense.id !== action.payload);
      return state;

    case constant.UPDATE_EXPENSE:
      const { amount, description, note } = action.payload.product;
      state = state.map((expense) => {
        if (expense.id === action.payload.id) {
          if (expense) {
            expense.amount = amount || expense.amount;
            expense.description = description || expense.description;
            expense.note = note || expense.note;
          }
        }
        return expense;
      });
      return state;

    default:
      return state;
  }
};

export const filterReducer = (
  state = initialState.filters,
  action: budgetActions
) => {
  switch (action.type) {
    case constant.FILTER_EXPENSE:
      return {
        ...state,
        keyword: action.payload.keyword,
      };

    default:
      return state;
  }
};
