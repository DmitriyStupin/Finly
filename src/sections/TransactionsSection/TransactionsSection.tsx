import TransactionsCard from '../../components/Transactions/TransactionsCard';
import styles from './TransactionsSection.module.scss';
import { transactionsItems } from '../../shared/config/transactionsItems.ts';

const TransactionsSection = () => {
  return (
    <div className={styles.transactionsSection}>
      {transactionsItems.map((transactionsItem) => (
        <TransactionsCard
          key={transactionsItem.id}
          title={transactionsItem.title}
          amount={transactionsItem.amount}
          variant={transactionsItem.variant}
        />
      ))}
    </div>
  );
};

export default TransactionsSection;
