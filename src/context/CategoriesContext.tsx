import { createContext, type ReactNode, useState } from 'react';
import type { Category } from '../shared/types/category.ts';

type Props = {
  children: ReactNode;
};

type CategoriesContextType = {
  categories: Category[];
  addCategory: (category: Category) => void;
  updateCategory: (category: Category) => void;
  deleteCategory: (id: number | undefined) => void;
};

export const CategoriesContext = createContext<CategoriesContextType | null>(
  null
);

export const CategoriesProvider = (props: Props) => {
  const { children } = props;

  const [categories, setCategories] = useState<Category[]>([]);

  const addCategory = (newCategory: Category) => {
    setCategories((prev) => [newCategory, ...prev]);
  };

  const updateCategory = (updatedCategory: Category) => {
    setCategories((prev) =>
      prev.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category
      )
    );
  };

  const deleteCategory = (id: number | undefined) => {
    setCategories((prev) => prev.filter((category) => category.id !== id));
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        addCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
