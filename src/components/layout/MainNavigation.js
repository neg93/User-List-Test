import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>User List</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;