import type { TransactionsItem } from '../types/transactions.ts';

export const transactionsCardItems: TransactionsItem[] = [
  {
    id: 1,
    title: 'Текущий баланс',
    amount: '42000',
    variant: 'balance',
  },
  {
    id: 2,
    title: 'Доходы',
    amount: '+84000',
    variant: 'income',
  },
  {
    id: 3,
    title: 'Расходы',
    amount: '-42000',
    variant: 'expense',
  },
];
