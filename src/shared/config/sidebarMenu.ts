import type { SidebarMenuItemType } from '../types/sidebar.ts';
import HomeIcon from '/src/assets/icons/home.svg';
import TransactionsIcon from '/src/assets/icons/transactions.svg';
import AccountsIcon from '/src/assets/icons/accounts.svg';
import StatisticsIcon from '/src/assets/icons/statistics.svg';
import CategoriesIcon from '/src/assets/icons/categories.svg';
import SettingsIcon from '/src/assets/icons/settings.svg';
import AboutIcon from '/src/assets/icons/about.svg';

export const menuItems: SidebarMenuItemType[] = [
  {
    id: 1,
    title: 'Главная страница',
    path: '/',
    icon: HomeIcon,
  },
  {
    id: 2,
    title: 'Операции',
    path: '/transactions',
    icon: TransactionsIcon,
  },
  {
    id: 3,
    title: 'Счета',
    path: '/accounts',
    icon: AccountsIcon,
  },
  {
    id: 4,
    title: 'Статистика',
    path: '/statistics',
    icon: StatisticsIcon,
  },
  {
    id: 5,
    title: 'Категории',
    path: '/categories',
    icon: CategoriesIcon,
  },
  {
    id: 6,
    title: 'Настройки',
    path: '/settings',
    icon: SettingsIcon,
  },
  {
    id: 7,
    title: 'О приложении',
    path: '/about',
    icon: AboutIcon,
  },
];
