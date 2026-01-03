import styles from './TransactionForm.module.scss';
import Button from '../../Button';
import { useState } from 'react';
import { operationTypes } from '../../../shared/config/transactions.ts';
import type { Transaction } from '../../../shared/types/transactions.ts';

type Props = {
  onAddTransaction: (transaction: Transaction) => void;
};

const TransactionForm = (props: Props) => {
  const { onAddTransaction } = props;

  const [typeOperation, setTypeOperation] = useState<'income' | 'expense'>(
    'income'
  );
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    const newTransaction = {
      id: Date.now(),
      amount: Number(amount),
      type: typeOperation,
      category: 'ЛЛЯЛЯ',
      date: new Date().toLocaleDateString(),
    };

    onAddTransaction(newTransaction);
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
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        id="amount"
        name="amount"
      />
      <Button type="submit" variant="primary">
        Добавить
      </Button>
    </form>
  );
};

export default TransactionForm;
