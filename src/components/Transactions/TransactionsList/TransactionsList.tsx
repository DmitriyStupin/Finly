import styles from './TransactionsList.module.scss';
import clsx from 'clsx';
import type { Transaction } from '../../../shared/types/transactions.ts';
import { categoryIcons } from '../../../shared/config/categoryOptions.ts';
import { useCategories } from '../../../hooks/useCategories.ts';

type Props = {
  transactions: Transaction[];
};

const TransactionsList = (props: Props) => {
  const { transactions } = props;

  const { categories } = useCategories();

  const iconMap = Object.fromEntries(
    categoryIcons.map(({ id, Icon }) => [id, Icon])
  );

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
        {transactions.map((transaction) => {
          const category = categories.find(
            (category) => category.id === transaction.categoryId
          );

          const Icon = category?.icon ? iconMap[category.icon] : null;
          return (
            <tr key={transaction.id} className={styles.transactionsListRow}>
              <td className={styles.transactionsListCell}>
                {transaction.date}
              </td>
              <td className={styles.transactionsListCellWithIcon}>
                {Icon && <Icon />}
                {category?.title ?? '-'}
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
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionsList;
