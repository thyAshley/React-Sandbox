import * as constant from "./budgetConstant";

interface ExpensesAttribute {
  id: string;
  description: string;
  note: string;
  amount: string;
  createdAt: number;
}

export interface ExpensesInputAttribute {
  description: string;
  note: string;
  amount: string;
}

interface FilterAttribute {
  keyword?: string;
  sortby?: string;
  startDate?: Date | undefined;
  endDate?: Date | undefined;
}

export interface BudgetAttribute {
  expenses: ExpensesAttribute[];
  filters: FilterAttribute;
}

export interface Add_Expense {
  type: typeof constant.ADD_EXPENSE;
  payload: ExpensesAttribute;
}
export interface Remove_Expenses {
  type: typeof constant.REMOVE_EXPENSE;
  payload: string;
}
export interface Update_Expenses {
  type: typeof constant.UPDATE_EXPENSE;
  payload: {
    id: string;
    product: ExpensesInputAttribute;
  };
}

export interface Filter_Expense {
  type: typeof constant.FILTER_EXPENSE;
  payload: {
    keyword: string;
  };
}

export type budgetActions =
  | Add_Expense
  | Remove_Expenses
  | Update_Expenses
  | Filter_Expense;
