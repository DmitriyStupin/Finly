import TransactionsList from '../../components/Transactions/TransactionsList';
import styles from './TransactionsPage.module.scss';
import clsx from 'clsx';
import { useTransactions } from '../../hooks/useTransactions.ts';

const TransactionsPage = () => {
  const { transactions } = useTransactions();

  return (
    <div className={clsx(styles.transactionsPageInner, 'container')}>
      <h1>Операции</h1>
      <TransactionsList transactions={transactions} />
    </div>
  );
};

export default TransactionsPage;
