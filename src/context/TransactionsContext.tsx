import { createContext, type ReactNode, useState } from 'react';
import { transactions as initialTransactions } from '../shared/config/transactions.ts';
import type { Transaction } from '../shared/types/transactions.ts';

type Props = {
  children: ReactNode;
};

type TransactionsContextType = {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
};

export const TransactionsContext =
  createContext<TransactionsContextType | null>(null);

export const TransactionsProvider = (props: Props) => {
  const { children } = props;

  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);

  const addTransaction = (newTransaction: Transaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
