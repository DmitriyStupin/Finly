import { createContext, type ReactNode, useState } from 'react';
import { initialCategories } from '../shared/config/categories.ts';
import type { Category } from '../shared/types/category.ts';

type Props = {
  children: ReactNode;
};

type CategoriesContextType = {
  categories: Category[];
  addCategory: (category: Category) => void;
  deleteCategory: (id: number) => void;
};

export const CategoriesContext = createContext<CategoriesContextType | null>(
  null
);

export const CategoriesProvider = (props: Props) => {
  const { children } = props;

  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const addCategory = (newCategory: Category) => {
    setCategories((prev) => [newCategory, ...prev]);
  };

  const deleteCategory = (id: number) => {
    setCategories((prev) => prev.filter((category) => category.id !== id));
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        addCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
