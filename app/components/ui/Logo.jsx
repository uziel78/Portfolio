import logoStyles from './Logo.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion.div
      className={logoStyles.logo}
      whileHover={{
        backgroundColor: [
          'rgb(123, 124, 145)',
          'rgb(123, 124, 245)',
          'rgb(146, 243, 234)',
        ],
        transition: { duration: 2, repeat: Infinity },
      }}
    >
      <MotionLink href='/' className={logoStyles.logo__content}>
        RH
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
