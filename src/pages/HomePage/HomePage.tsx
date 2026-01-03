import TransactionsCardsSection from '../../sections/TransactionsCardsSection';
import clsx from 'clsx';
import styles from './HomePage.module.scss';
import TransactionsListSection from '../../sections/TransactionsListSection';
import Modal from '../../components/Modal';
import { useState } from 'react';
import TransactionForm from '../../components/Transactions/TransactionForm';
import Button from '../../components/Button';
import AddIcon from '/src/assets/icons/add.svg?react';
import { transactions as initialTransactions } from '../../shared/config/transactions.ts';
import type { Transaction } from '../../shared/types/transactions.ts';

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [transactions, setTransactions] = useState(initialTransactions);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const addTransaction = (newTransaction: Transaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <div className={clsx(styles.homePageInner, 'container')}>
      <h1>Главная страница</h1>
      <TransactionsCardsSection />
      <Button
        className={styles.homePageAddButton}
        onClick={openModal}
        type={'button'}
        icon={<AddIcon />}
      >
        Добавить операцию
      </Button>
      <TransactionsListSection transactions={transactions} />
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <TransactionForm onAddTransaction={addTransaction} />
      </Modal>
    </div>
  );
};

export default HomePage;
