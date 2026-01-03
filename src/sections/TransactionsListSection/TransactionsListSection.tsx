import TransactionsList from '../../components/Transactions/TransactionsList';
import styles from './TransactionsListSection.module.scss';
import MoreLink from '../../components/MoreLink';

const TransactionsListSection = () => {
  return (
    <section className={styles.transactionsListSection}>
      <div className={styles.transactionsListSectionHeader}>
        <h3 className={styles.transactionsListSectionTitle}>
          Последние операции
        </h3>
        <MoreLink />
      </div>
      <TransactionsList />
    </section>
  );
};

export default TransactionsListSection;
