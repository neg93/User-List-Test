import classess from './Header404.module.css';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Header404() {
  
  return (
    <section className={classess.container}>
      <div className={`section-contain margintop-lg ${classess.content}`}>
        <h1 className={classess.h1}>404</h1>
        <h2 className={classess.h2}>The page you're looking for could not be found...</h2>
        <Link href="/">
          <a className={classess.homeLink}>
            <Button variant="contained" className={classess.button}>Go Back Home</Button>  
          </a>
        </Link>
        <br />
      </div>
    </section>
  );
}

export default Header404;