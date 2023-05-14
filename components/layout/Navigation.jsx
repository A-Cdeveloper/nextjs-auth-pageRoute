import React from 'react';
import Link from 'next/link';
import classes from './Navigation.module.scss';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <Link
            href="/"
            className={router.pathname === '/' ? classes.active : null}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className={router.pathname === '/profile' ? classes.active : null}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link href="/">Logout</Link>
        </li>
        <li>
          <Link
            href="/login"
            className={router.pathname === '/login' ? classes.active : null}
          >
            Login/Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
