import clsx from 'clsx';
import styles from './SidebarMenuItem.module.scss';
import SidebarMenuLink from '../SidebarMenuLink';
import type { SidebarMenuItemType } from '../../../types/sidebar.ts';
import { useLocation } from 'react-router-dom';

type Props = SidebarMenuItemType;

const SidebarMenuItem = (props: Props) => {
  const { title, path, iconHref } = props;

  const location = useLocation().pathname;

  return (
    <li
      className={clsx(
        styles.sidebarMenuItem,
        path === location ? styles.sidebarMenuItemActive : ''
      )}
    >
      <SidebarMenuLink title={title} path={path} iconHref={iconHref} />
    </li>
  );
};

export default SidebarMenuItem;
