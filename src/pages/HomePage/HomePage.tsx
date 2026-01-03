import TransactionsCardsSection from '../../sections/TransactionsCardsSection';
import clsx from 'clsx';
import styles from './HomePage.module.scss';
import TransactionsListSection from '../../sections/TransactionsListSection';
import Modal from '../../components/Modal';
import { useState } from 'react';
import TransactionForm from '../../components/Transactions/TransactionForm';
import Button from '../../components/Button';
import AddIcon from '/src/assets/icons/add.svg?react';

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
      <TransactionsListSection />
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <TransactionForm />
      </Modal>
    </div>
  );
};

export default HomePage;
