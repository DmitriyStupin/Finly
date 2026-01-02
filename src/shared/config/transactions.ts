import type { Transaction } from '../types/transactions.ts';

export const transactions: Transaction[] = [
  {
    id: 1,
    title: 'Зарплата',
    amount: 84000,
    type: 'income',
    category: 'Работа',
    date: '2025-01-01',
  },
  {
    id: 2,
    title: 'Продукты',
    amount: 4200,
    type: 'expense',
    category: 'Еда',
    date: '2025-01-02',
  },
];
