'use client';

import Link from 'next/link';
import Logo from './ui/Logo';
import navStyles from './Navbar.module.scss';
import { FaFacebook, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className={navStyles.header}>
      <div className={navStyles.content}>
        <nav className={navStyles.page__links}>
          <Link href='/'>Home</Link> |<Link href='/about'>About</Link> |
          <Link href='/projects'>Projects</Link> |
          <Link href='/code/repos'>Code</Link>
        </nav>

        <Logo />

        <nav className={navStyles.external__links}>
          <Link
            href='https://www.facebook.com/profile.php?id=100080220701486'
            target={'_blank'}
          >
            <FaFacebook />
          </Link>
          <Link
            href='https://github.com/uziel78?tab=repositories'
            target={'_blank'}
          >
            <FaGithub />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
