import styles from './Sidebar.module.scss';
import Logo from '../Logo';
import SidebarMenu from './SidebarMenu';
import clsx from 'clsx';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
};

const Sidebar = (props: Props) => {
  const { isOpen, onClose } = props;

  return (
    <>
      <div className={clsx(styles.sidebar, isOpen && styles.sidebarOpen)}>
        <div className={styles.sidebarLogoWrapper}>
          <Logo />
        </div>
        <SidebarMenu onClose={onClose} />
      </div>

      {isOpen && <div className={styles.overlay} onClick={onClose} />}
    </>
  );
};

export default Sidebar;
