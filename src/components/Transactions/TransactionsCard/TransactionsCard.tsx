import styles from './TransactionsCard.module.scss';
import clsx from 'clsx';
import type { TransactionsCardVariant } from '../../../shared/types/transactions.ts';

type Props = {
  title: string;
  amount: string;
  variant: TransactionsCardVariant;
};

const TransactionsCard = (props: Props) => {
  const { title, amount, variant } = props;

  return (
    <div
      className={clsx(
        styles.transactionsCard,
        styles[`transactionsCard--${variant}`]
      )}
    >
      <h2 className={styles.transactionsCardTitle}>{title}</h2>
      <span className={styles.transactionsCardAmount}>{amount}₽</span>
    </div>
  );
};

export default TransactionsCard;
