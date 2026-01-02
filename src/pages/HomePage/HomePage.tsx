import TransactionsCardsSection from '../../sections/TransactionsCardsSection';
import clsx from 'clsx';
import styles from './HomePage.module.scss';
import TransactionsListSection from '../../sections/TransactionsListSection';

const HomePage = () => {
  return (
    <div className={clsx(styles.homePageInner, 'container')}>
      <h1>Главная страница</h1>
      <TransactionsCardsSection />
      <TransactionsListSection />
    </div>
  );
};

export default HomePage;
