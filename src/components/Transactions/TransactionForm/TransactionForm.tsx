import styles from './TransactionForm.module.scss';
import Button from '../../Button';
import { useState } from 'react';
import { operationTypes } from '../../../shared/config/transactions.ts';
import { useCategories } from '../../../hooks/useCategories.ts';
import CategoryBadge from '../../Category/CategoryBadge';
import { categoryIcons } from '../../../shared/config/categoryOptions.ts';
import type { Transaction } from '../../../shared/types/transactions.ts';

type Props = {
  onAddTransaction: (transaction: Transaction) => void;
  onClose: () => void;
};

type FormErrors = {
  amount?: string;
  category?: string;
};

const TransactionForm = (props: Props) => {
  const { onClose, onAddTransaction } = props;

  const { categories } = useCategories();

  const [typeOperation, setTypeOperation] = useState<'income' | 'expense'>(
    'income'
  );
  const [amount, setAmount] = useState('');
  // const [category, setCategory] = useState('');
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!amount || Number(amount) <= 0) {
      newErrors.amount = 'Введите сумму больше 0';
    }

    if (categoryId === null) {
      newErrors.category = 'Введите категорию';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const newTransaction = {
      id: Date.now(),
      amount: Number(amount),
      type: typeOperation,
      categoryId: categoryId!,
      date: new Date().toLocaleDateString(),
    };

    onAddTransaction(newTransaction);
    onClose();
  };

  const isCategoryActive = (id: number) => categoryId === id;

  const iconMap = Object.fromEntries(
    categoryIcons.map(({ id, Icon }) => [id, Icon])
  );

  return (
    <form
      className={styles.transactionForm}
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <h2>Добавление операции</h2>
      <div className={styles.transactionFormGroup}>
        <h3>Вид операции</h3>
        <div className={styles.transactionFormGroupButtons}>
          {operationTypes.map((operationType) => (
            <Button
              key={operationType.id}
              className={styles.transactionFormGroupButton}
              variant={
                operationType.value === typeOperation ? 'primary' : 'gray'
              }
              onClick={() => {
                setTypeOperation(operationType.value);
                setCategoryId(null);
              }}
            >
              {operationType.label}
            </Button>
          ))}
        </div>
      </div>

      <input
        className={styles.transactionFormInput}
        type={'number'}
        placeholder={'Сумма'}
        onKeyDown={(e) => {
          if (['+', '-', '*', '/', 'e', 'E'].includes(e.key)) {
            e.preventDefault();
          }
        }}
        min={1}
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        id="amount"
        name="amount"
      />
      {errors.amount && (
        <span className={styles.transactionFormError}>{errors.amount}</span>
      )}
      <div className={styles.transactionFormCategoriesList}>
        {categories
          .filter((category) => category.type === typeOperation)
          .map((category) => (
            <CategoryBadge
              key={category.id}
              style={
                category.color
                  ? {
                      backgroundColor: category.color,
                    }
                  : undefined
              }
              onClick={() => setCategoryId(category.id)}
              title={category.title}
              Icon={iconMap[category.icon]}
              isActive={isCategoryActive(category.id)}
            />
          ))}
      </div>
      {errors.category && (
        <span className={styles.transactionFormError}>{errors.category}</span>
      )}
      <Button type="submit" variant="primary">
        Добавить
      </Button>
    </form>
  );
};

export default TransactionForm;
