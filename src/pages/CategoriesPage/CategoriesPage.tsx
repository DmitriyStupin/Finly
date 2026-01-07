import clsx from 'clsx';
import styles from '../HomePage/HomePage.module.scss';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import AddIcon from '/src/assets/icons/add.svg?react';
import { useState } from 'react';
import CategoryForm from '../../components/Category/CategoryForm';
import { useCategories } from '../../hooks/useCategories.ts';

const CategoriesPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { categories, addCategory, deleteCategory } = useCategories();

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={clsx(styles.categoriesPageInner, 'container')}>
      <h1>Главная страница</h1>
      <Button
        className={styles.categoriesPageAddButton}
        onClick={openModal}
        type={'button'}
        icon={<AddIcon />}
      >
        Добавить категорию
      </Button>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <CategoryForm onAddCategory={addCategory} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default CategoriesPage;
