import styles from './TransactionForm.module.scss';
import Button from '../../Button';
import { useState } from 'react';
import { operationTypes } from '../../../shared/config/transactions.ts';
import type { Transaction } from '../../../shared/types/transactions.ts';
import { initialCategories } from '../../../shared/config/categories.ts';

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

  const [typeOperation, setTypeOperation] = useState<'income' | 'expense'>(
    'income'
  );
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!amount || Number(amount) <= 0) {
      newErrors.amount = 'Введите сумму больше 0';
    }

    if (!category.trim()) {
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
      category: category,
      date: new Date().toLocaleDateString(),
    };

    onAddTransaction(newTransaction);
    onClose();
  };

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
              onClick={() => setTypeOperation(operationType.value)}
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
      <select name="" id="">
        {initialCategories.map((initialCategory) => (
          <option value={initialCategory.title}>{initialCategory.title}</option>
        ))}
      </select>
      {/*<input
        className={styles.transactionFormInput}
        type={'text'}
        placeholder={'Категория'}
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        id="category"
        name="category"
      />*/}
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
