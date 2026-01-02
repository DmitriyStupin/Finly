import { Link } from 'react-router-dom';

type Props = {
  path?: string;
};

const Logo = (props: Props) => {
  const { path = '/' } = props;

  return (
    <Link to={path}>
      <img
        src="/src/assets/images/logo.svg"
        width={156}
        height={48}
        loading="lazy"
        alt={'logo'}
      />
    </Link>
  );
};

export default Logo;
