import styles from './CategoryBadge.module.scss';
import clsx from 'clsx';
import { type CSSProperties } from 'react';
import * as React from 'react';

type Props = {
  title: string;
  isActive?: boolean;
  onClick: () => void;
  style?: CSSProperties;
  Icon: React.ComponentType | string;
};

const CategoryBadge = (props: Props) => {
  const { title, isActive, onClick, style, Icon } = props;

  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.categoryBadge,
        isActive && styles.categoryBadgeActive
      )}
      type={'button'}
      style={style}
    >
      <Icon />
      {title}
    </button>
  );
};

export default CategoryBadge;
