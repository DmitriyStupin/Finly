import Logo from '../Logo';
import styles from './Header.module.scss';

type Props = {
  onClick: () => void;
  isOpen?: boolean; // чтобы анимацию менять при открытии
};

const Header = (props: Props) => {
  const { onClick, isOpen = false } = props;

  return (
    <header className={styles.header}>
      <button
        className={`${styles.headerBurger} ${isOpen ? styles.open : ''}`}
        onClick={onClick}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      <Logo />
    </header>
  );
};

export default Header;
