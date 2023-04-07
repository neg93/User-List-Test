import Link from 'next/link';

import classes from './MainNavigation.module.css';
import { useRouter } from "next/router";


function MainNavigation() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <header className={classes.header}>
      <div className={classes.logo}>User List</div>
      <nav>
        <ul>
        {!isHomePage && (
            <li>
              <Link href="/">All Users</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;