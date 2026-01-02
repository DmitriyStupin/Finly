import styles from './SidebarMenu.module.scss';
import SidebarMenuItem from '../SidebarMenuItem';
import type { SidebarMenuItemType } from '../../../types/sidebar.ts';

const SidebarMenu = () => {
  const menuItems: SidebarMenuItemType[] = [
    {
      id: 1,
      title: 'Главная страница',
      path: '/',
      iconHref: '/src/assets/icons/home.svg',
    },
    {
      id: 2,
      title: 'Операции',
      path: '/transactions',
      iconHref: '/src/assets/icons/transactions.svg',
    },
    {
      id: 3,
      title: 'Счета',
      path: '/accounts',
      iconHref: '/src/assets/icons/accounts.svg',
    },
    {
      id: 4,
      title: 'Статистика',
      path: '/statistics',
      iconHref: '/src/assets/icons/statistics.svg',
    },
    {
      id: 5,
      title: 'Категории',
      path: '/categories',
      iconHref: '/src/assets/icons/categories.svg',
    },
    {
      id: 6,
      title: 'Настройки',
      path: '/settings',
      iconHref: '/src/assets/icons/settings.svg',
    },
    {
      id: 7,
      title: 'О приложении',
      path: '/about',
      iconHref: '/src/assets/icons/about.svg',
    },
  ];

  return (
    <ul className={styles.sidebarMenu}>
      {menuItems.map((menuItem) => (
        <SidebarMenuItem key={menuItem.id} {...menuItem} />
      ))}
    </ul>
  );
};

export default SidebarMenu;
