import { transactions } from '../../../shared/config/transactions.ts';
import styles from './TransactionsList.module.scss';
import clsx from 'clsx';

const TransactionsList = () => {
  return (
    <table className={styles.transactionsList}>
      <thead className={styles.transactionsListHeader}>
        <tr className={styles.transactionsListRow}>
          <th className={styles.transactionsListCellHead}>Дата</th>
          <th className={styles.transactionsListCellHead}>Категория</th>
          <th className={styles.transactionsListCellHead}>Значение</th>
        </tr>
      </thead>
      <tbody className={styles.transactionsListBody}>
        {transactions.map((transaction) => (
          <tr key={transaction.id} className={styles.transactionsListRow}>
            <td className={styles.transactionsListCell}>{transaction.date}</td>
            <td className={styles.transactionsListCell}>
              {transaction.category}
            </td>
            <td
              className={clsx(
                styles.transactionsListCell,
                transaction.type === 'income'
                  ? styles.transactionsListCellIncome
                  : styles.transactionsListCellExpense
              )}
            >
              {transaction.type === 'income' ? '+' : '-'}
              {transaction.amount} ₽
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsList;
