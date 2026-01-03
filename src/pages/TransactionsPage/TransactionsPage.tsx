import TransactionsList from '../../components/Transactions/TransactionsList';
import styles from './TransactionsPage.module.scss';
import clsx from 'clsx';

const TransactionsPage = () => {
  return (
    <div className={clsx(styles.transactionsPageInner, 'container')}>
      <h1>Операции</h1>
      <TransactionsList />
    </div>
  );
};

export default TransactionsPage;
