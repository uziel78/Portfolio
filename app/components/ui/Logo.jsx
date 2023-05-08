import logoStyles from './Logo.module.scss';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className={logoStyles.logo}>
      <Link href='/' className={logoStyles.logo__content}>
        RH
      </Link>
    </div>
  );
};

export default Logo;
