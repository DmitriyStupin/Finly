import styles from './Sidebar.module.scss';
import Logo from '../Logo';
import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarLogoWrapper}>
        <Logo />
      </div>
      <SidebarMenu />
    </div>
  );
};

export default Sidebar;
