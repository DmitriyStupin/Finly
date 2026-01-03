import TransactionsCardsSection from '../../sections/TransactionsCardsSection';
import clsx from 'clsx';
import styles from './HomePage.module.scss';
import TransactionsListSection from '../../sections/TransactionsListSection';
import Modal from '../../components/Modal';
import { useState } from 'react';

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
      <TransactionsListSection />
      <button onClick={openModal} type="button">
        Открыть модальное окно
      </button>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        ajkk;aldsask;djaklssss ajkk;aldsask;djaklssss
        ajkk;aldsask;djaklssssajkk;aldsask;djaklssss ajkk;aldsask;djaklssss
        ajkk;aldsask;djaklssss ajkk;aldsask;djaklssss ajkk;aldsask;djaklssss
      </Modal>
    </div>
  );
};

export default HomePage;
