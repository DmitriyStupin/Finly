export type TransactionsCardVariant = 'balance' | 'income' | 'expense';

export type TransactionsItem = {
  id: number;
  title: string;
  amount: string;
  variant: TransactionsCardVariant;
};
