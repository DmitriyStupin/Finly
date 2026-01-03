import TransactionsList from '../../components/Transactions/TransactionsList';
import styles from './TransactionsListSection.module.scss';
import MoreLink from '../../components/MoreLink';
import type { Transaction } from '../../shared/types/transactions.ts';

type Props = {
  transactions: Transaction[];
};

const TransactionsListSection = (props: Props) => {
  const { transactions } = props;

  return (
    <section className={styles.transactionsListSection}>
      <div className={styles.transactionsListSectionHeader}>
        <h3 className={styles.transactionsListSectionTitle}>
          Последние операции
        </h3>
        <MoreLink />
      </div>
      <TransactionsList transactions={transactions} />
    </section>
  );
};

export default TransactionsListSection;
