import styles from './CategoryBadge.module.scss';
import clsx from 'clsx';

type Props = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

const CategoryBadge = (props: Props) => {
  const { title, isActive, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.categoryBadge,
        isActive && styles.categoryBadgeActive
      )}
      type={'button'}
    >
      {title}
    </button>
  );
};

export default CategoryBadge;
