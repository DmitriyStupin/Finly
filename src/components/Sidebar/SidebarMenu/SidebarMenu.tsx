import styles from './SidebarMenu.module.scss';
import SidebarMenuItem from '../SidebarMenuItem';
import { menuItems } from '../../../shared/config/sidebarMenu.ts';

type Props = {
  onClose?: () => void;
};

const SidebarMenu = (props: Props) => {
  const { onClose } = props;

  return (
    <ul className={styles.sidebarMenu}>
      {menuItems.map((menuItem) => (
        <SidebarMenuItem key={menuItem.id} {...menuItem} onClose={onClose} />
      ))}
    </ul>
  );
};

export default SidebarMenu;
