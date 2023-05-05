import navbarStyles from './Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <div>Navbar</div>
      <div>
        <ul>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/code/repos'>Code</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
