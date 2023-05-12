'use client';

import Link from 'next/link';
import Logo from './ui/Logo';
import navStyles from './Navbar.module.scss';
import { FaFacebook, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className={navStyles.header}>
      <div className={navStyles.content}>
        <nav className={navStyles.page}>
          <Link href='/' className={navStyles.page__link}>
            Home
          </Link>
          <Link href='/about' className={navStyles.page__link}>
            About
          </Link>
          <Link href='/projects' className={navStyles.page__link}>
            Projects
          </Link>
          <Link href='/code/repos' className={navStyles.page__link}>
            Code
          </Link>
        </nav>

        <Logo />

        <nav className={navStyles.social}>
          <Link
            href='https://www.facebook.com/profile.php?id=100080220701486'
            target={'_blank'}
            className={navStyles.social__link}
          >
            <FaFacebook />
          </Link>
          <Link
            href='https://github.com/uziel78?tab=repositories'
            target={'_blank'}
            className={navStyles.social__link}
          >
            <FaGithub />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
