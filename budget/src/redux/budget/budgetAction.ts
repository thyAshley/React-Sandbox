import { v4 as uuidv4 } from "uuid";

import {
  ExpensesInputAttribute,
  Add_Expense,
  Remove_Expenses,
  Update_Expenses,
  Filter_Expense,
} from "./types";
import {
  ADD_EXPENSE,
  FILTER_EXPENSE,
  REMOVE_EXPENSE,
  UPDATE_EXPENSE,
} from "./budgetConstant";

export const addExpense = (payload: ExpensesInputAttribute): Add_Expense => {
  return {
    type: ADD_EXPENSE,
    payload: {
      ...payload,
      id: uuidv4(),
      createdAt: Date.now(),
    },
  };
};

export const removeExpense = (id: string): Remove_Expenses => {
  return {
    type: REMOVE_EXPENSE,
    payload: id,
  };
};

export const updateExpense = (
  id: string,
  product: ExpensesInputAttribute
): Update_Expenses => {
  return {
    type: UPDATE_EXPENSE,
    payload: {
      id: id,
      product: product,
    },
  };
};

export const filterExpense = (keyword: string = ""): Filter_Expense => {
  return {
    type: FILTER_EXPENSE,
    payload: {
      keyword,
    },
  };
};
