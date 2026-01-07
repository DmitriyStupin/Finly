import styles from './CategoryForm.module.scss';
import Button from '../../Button';
import { useState } from 'react';
import {
  categoryColors,
  categoryIcons,
} from '../../../shared/config/categoryOptions.ts';
import clsx from 'clsx';
import { operationTypes } from '../../../shared/config/transactions.ts';

type Props = {
  onAddCategory: (category: {
    id: number;
    title: string;
    type: 'income' | 'expense';
    color: string | null;
    icon: string | null;
  }) => void;

  onClose: () => void;
};

const CategoryForm = (props: Props) => {
  const { onAddCategory, onClose } = props;

  const [title, setTitle] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [color, setColor] = useState<string | null>(null);
  const [icon, setIcon] = useState<string | null>(null);

  const handleSubmit = () => {
    const newCategory = {
      id: Date.now(),
      title: title,
      type: type,
      color: color,
      icon: icon,
    };

    onAddCategory(newCategory);
    onClose();
  };

  return (
    <form
      className={styles.categoryForm}
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <h2 className={styles.categoryFormTitle}>Создание категории</h2>
      <div className={styles.categoryFormGroup}>
        <label htmlFor={'title'} className={styles.categoryFormLabel}>
          Название
        </label>
        <input
          className={styles.categoryFormInput}
          type="text"
          id={'title'}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Например: Продукты"
        />
      </div>
      <div className={styles.categoryFormGroup}>
        <label className={styles.categoryFormLabel}>Тип</label>
        <div className={styles.categoryFormButtons}>
          {operationTypes.map((operationType) => (
            <Button
              key={operationType.id}
              className={styles.categoryFormTypeButton}
              variant={operationType.value === type ? 'primary' : 'gray'}
              onClick={() => {
                setType(operationType.value);
              }}
            >
              {operationType.label}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.categoryFormGroup}>
        <label className={styles.categoryFormLabel}>Цвет</label>
        <div className={styles.categoryFormColors}>
          {categoryColors.map((categoryColor) => (
            <button
              key={categoryColor.id}
              type="button"
              className={clsx(
                styles.categoryFormColor,
                color === categoryColor.id && styles.categoryFormColorActive
              )}
              style={{
                background: categoryColor.value,
              }}
              onClick={() => setColor(categoryColor.id)}
            />
          ))}
        </div>
      </div>
      <div className={styles.categoryFormGroup}>
        <label className={styles.categoryFormLabel}>Иконка</label>
        <div className={styles.categoryFormIcons}>
          {categoryIcons.map(({ id, Icon }) => (
            <button
              key={id}
              className={clsx(
                styles.categoryFormIcon,
                icon === id && styles.categoryFormIconActive
              )}
              type="button"
              onClick={() => setIcon(id)}
            >
              <Icon />
            </button>
          ))}
        </div>
      </div>

      {/* Кнопка */}
      <Button type="submit" variant="primary">
        Создать категорию
      </Button>
    </form>
  );
};

export default CategoryForm;
