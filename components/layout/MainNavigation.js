import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Say Hello</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Celebrities</Link>
          </li>
          <li>
            <Link href='/new-celebrity'>Add New Celebrity</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
