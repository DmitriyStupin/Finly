export type TransactionsCardVariant = 'balance' | 'income' | 'expense';

export type TransactionType = 'income' | 'expense';

export type TransactionsItem = {
  id: number;
  title: string;
  amount: string;
  variant: TransactionsCardVariant;
};

export type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  date: string;
};
