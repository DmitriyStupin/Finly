import { Link } from 'react-router-dom';
import LogoIcon from '/src/assets/images/logo.svg';

type Props = {
  path?: string;
};

const Logo = (props: Props) => {
  const { path = '/' } = props;

  return (
    <Link to={path}>
      <img src={LogoIcon} width={156} height={48} loading="lazy" alt={'logo'} />
    </Link>
  );
};

export default Logo;
