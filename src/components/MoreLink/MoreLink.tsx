import ArrowIcon from '/src/assets/icons/arrow-right.svg?react';
import { Link } from 'react-router-dom';
import styles from './MoreLink.module.scss';

const MoreLink = () => {
  return (
    <Link className={styles.moreLink} to={'/transactions'}>
      Смотреть все
      <ArrowIcon className={styles.moreLinkIcon} />
    </Link>
  );
};

export default MoreLink;
