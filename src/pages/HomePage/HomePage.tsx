import TransactionsSection from '../../sections/TransactionsSection';
import clsx from 'clsx';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={clsx(styles.homePageInner, 'container')}>
      <h1>Главная страница</h1>
      <TransactionsSection />
    </div>
  );
};

export default HomePage;
