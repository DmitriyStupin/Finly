import type { OperationTypeItem, Transaction } from '../types/transactions.ts';

export const transactions: Transaction[] = [];

export const operationTypes: OperationTypeItem[] = [
  {
    id: 1,
    value: 'income',
    label: 'Доход',
  },

  {
    id: 2,
    value: 'expense',
    label: 'Расход',
  },
];
