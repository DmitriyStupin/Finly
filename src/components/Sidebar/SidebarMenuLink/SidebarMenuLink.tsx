import styles from './SidebarMenuLink.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  path: string;
  iconHref: string;
};

const SidebarMenuLink = (props: Props) => {
  const { title, path, iconHref } = props;

  return (
    <Link className={styles.sidebarMenuLink} to={path}>
      <img src={iconHref} alt={title} width="20" height="20" loading="lazy" />
      {title}
    </Link>
  );
};

export default SidebarMenuLink;
