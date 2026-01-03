import TransactionsCardsSection from '../../sections/TransactionsCardsSection';
import clsx from 'clsx';
import styles from './HomePage.module.scss';
import TransactionsListSection from '../../sections/TransactionsListSection';
import Modal from '../../components/Modal';
import { useState } from 'react';
import TransactionForm from '../../components/Transactions/TransactionForm';
import Button from '../../components/Button';
import AddIcon from '/src/assets/icons/add.svg?react';
import { useTransactions } from '../../hooks/useTransactions.ts';

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { transactions, addTransaction } = useTransactions();

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
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
        <TransactionForm
          onClose={closeModal}
          onAddTransaction={addTransaction}
        />
      </Modal>
    </div>
  );
};

export default HomePage;
