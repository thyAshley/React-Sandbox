import * as constant from "./budgetConstant";

interface ExpensesAttribute {
  id: string;
  description: string;
  note: string;
  amount: string;
  createdAt: number;
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

interface add {
  type: typeof constant.ADD;
  payload: number;
}

export type budgetActions = add;
