import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(usersData) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{usersData.children}</main>
    </div>
  );
}

export default Layout;