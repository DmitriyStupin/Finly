import TransactionsList from '../../components/Transactions/TransactionsList';
import styles from './TransactionsListSection.module.scss';

const TransactionsListSection = () => {
  return (
    <section className={styles.transactionsListSection}>
      <h3 className={styles.transactionsListSectionTitle}>
        Последние операции
      </h3>
      <TransactionsList />
    </section>
  );
};

export default TransactionsListSection;
