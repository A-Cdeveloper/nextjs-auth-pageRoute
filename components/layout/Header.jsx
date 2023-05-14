import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

import classes from './Header.module.scss';
const Header = () => {
  return (
    <header className={classes.header}>
      <div className="logo">
        <Link href="/">
          <Image src="/img/logo.png" width={100} height={60} alt="login" />
        </Link>
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
