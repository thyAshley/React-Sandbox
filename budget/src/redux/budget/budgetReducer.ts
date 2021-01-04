import { bindActionCreators } from "redux";
import { BudgetAttribute, budgetActions } from "./types";
import * as constant from "./budgetConstant";

const state: BudgetAttribute = {
  expenses: [],
  filters: {
    keyword: "rent",
    sortby: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};

export const expenseReducer = (
  initialState = state.expenses,
  action: budgetActions
) => {
  switch (action.type) {
    case constant.ADD:
      return {
        ...initialState,
      };
    default:
      return initialState;
  }
};

export const filterReducer = (
  initialState = state.filters,
  action: budgetActions
) => {
  switch (action.type) {
    case constant.ADD:
      return {
        ...initialState,
      };
    default:
      return initialState;
  }
};
