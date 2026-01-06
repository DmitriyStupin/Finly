import type { Category } from '../types/category.ts';

export const initialCategories: Category[] = [
  {
    id: 1,
    title: 'Еда',
    type: 'expense',
  },
  {
    id: 2,
    title: 'Квартира',
    type: 'expense',
  },
  {
    id: 3,
    title: 'Зарплата',
    type: 'income',
  },
  {
    id: 4,
    title: 'Подарок',
    type: 'income',
  },
];
