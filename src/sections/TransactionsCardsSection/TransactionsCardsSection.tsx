import TransactionsCard from '../../components/Transactions/TransactionsCard';
import styles from './TransactionsCardsSection.module.scss';
import { transactionsCardItems } from '../../shared/config/transactionsCardItems.ts';

const TransactionsCardsSection = () => {
  return (
    <section className={styles.transactionsCardsSection}>
      <h3 className={styles.transactionsCardsSectionTitle}>Баланс</h3>
      <div className={styles.transactionsCardsSectionInner}>
        {transactionsCardItems.map((transactionsCardItem) => (
          <TransactionsCard
            key={transactionsCardItem.id}
            title={transactionsCardItem.title}
            amount={transactionsCardItem.amount}
            variant={transactionsCardItem.variant}
          />
        ))}
      </div>
    </section>
  );
};

export default TransactionsCardsSection;
