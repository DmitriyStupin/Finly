import type { Transaction } from '../types/transactions.ts';

export const transactions: Transaction[] = [
  {
    id: 1,
    title: 'Зарплата',
    amount: 84000,
    type: 'income',
    category: 'Работа',
    date: '01.01.2025',
  },
  {
    id: 2,
    title: 'Продукты',
    amount: 4200,
    type: 'expense',
    category: 'Еда',
    date: '01.02.2025',
  },
];
