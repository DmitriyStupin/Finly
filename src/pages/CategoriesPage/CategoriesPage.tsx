import clsx from 'clsx';
import styles from './CategoriesPage.module.scss';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import AddIcon from '/src/assets/icons/add.svg?react';
import { useState } from 'react';
import CategoryForm from '../../components/Category/CategoryForm';
import { useCategories } from '../../hooks/useCategories.ts';
import { operationTypes } from '../../shared/config/transactions.ts';
import CategoryBadge from '../../components/Category/CategoryBadge';
import { categoryIcons } from '../../shared/config/categoryOptions.ts';

const CategoriesPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [typeOperation, setTypeOperation] = useState<'income' | 'expense'>(
    'income'
  );
  const [category, setCategory] = useState('');

  const { categories, addCategory, deleteCategory } = useCategories();

  // const isCategoryActive = (title: string) => category === title;

  const iconMap = Object.fromEntries(
    categoryIcons.map(({ id, Icon }) => [id, Icon])
  );

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const filteredCategories = categories.filter(
    (category) => category.type === typeOperation
  );

  return (
    <div className={clsx(styles.categoriesPageInner, 'container')}>
      <h1>Категории</h1>
      <div className={styles.categoriesPageButtons}>
        {operationTypes.map((operationType) => (
          <Button
            key={operationType.id}
            className={styles.categoriesPageButton}
            variant={operationType.value === typeOperation ? 'primary' : 'gray'}
            onClick={() => {
              setTypeOperation(operationType.value);
            }}
          >
            {operationType.label}
          </Button>
        ))}
      </div>
      <div className={styles.categoriesPageList}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <CategoryBadge
              key={category.id}
              style={
                category.color
                  ? {
                      backgroundColor: category.color,
                    }
                  : undefined
              }
              onClick={() => setCategory(category.title)}
              title={category.title}
              Icon={iconMap[category.icon]}
            />
          ))
        ) : (
          <h3>Категорий пока что нет! Добавьте категории</h3>
        )}
      </div>
      <Button
        className={styles.categoriesPageAddButton}
        onClick={openModal}
        type={'button'}
        icon={<AddIcon />}
      >
        Добавить категорию
      </Button>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <CategoryForm
          onAddCategory={addCategory}
          onClose={closeModal}
          typeOperationOnPage={typeOperation}
        />
      </Modal>
    </div>
  );
};

export default CategoriesPage;
