import * as React from 'react';

export type TransactionsCardVariant = 'balance' | 'income' | 'expense';

export type TransactionType = 'income' | 'expense';

export type TransactionsItem = {
  id: number;
  title: string;
  amount: number;
  variant: TransactionsCardVariant;
};

export type Transaction = {
  id: number;
  // title: string;
  amount: number;
  type: TransactionType;
  icon: React.ComponentType | string;
  category: string;
  date: string;
};

export type OperationTypeItem = {
  id: number;
  value: TransactionType;
  label: string;
};
