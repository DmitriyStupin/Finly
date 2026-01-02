import styles from './SidebarMenu.module.scss';
import SidebarMenuItem from '../SidebarMenuItem';
import { menuItems } from '../../../shared/config/sidebarMenu.ts';

const SidebarMenu = () => {
  return (
    <ul className={styles.sidebarMenu}>
      {menuItems.map((menuItem) => (
        <SidebarMenuItem key={menuItem.id} {...menuItem} />
      ))}
    </ul>
  );
};

export default SidebarMenu;
