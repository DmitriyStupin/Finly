import TransactionsCard from '../../components/Transactions/TransactionsCard';
import styles from './TransactionsCardsSection.module.scss';
import { useTransactions } from '../../hooks/useTransactions.ts';
import type { TransactionsItem } from '../../shared/types/transactions.ts';

const TransactionsCardsSection = () => {
  const { transactions } = useTransactions();

  const income = transactions.reduce((sum, transaction) => {
    if (transaction.type === 'income') {
      return sum + transaction.amount;
    }

    return sum;
  }, 0);

  const expense = transactions.reduce((sum, transaction) => {
    if (transaction.type === 'expense') {
      return sum + transaction.amount;
    }

    return sum;
  }, 0);

  const balance = income - expense;

  const transactionsCardItems: TransactionsItem[] = [
    {
      id: 1,
      title: 'Текущий баланс',
      amount: balance,
      variant: 'balance',
    },
    {
      id: 2,
      title: 'Доходы',
      amount: income,
      variant: 'income',
    },
    {
      id: 3,
      title: 'Расходы',
      amount: expense,
      variant: 'expense',
    },
  ];

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
