import Link from 'next/link';
import { useEffect } from 'react';
import Header404 from '@/components/Header404';

 function NotFound() {
  useEffect(() => {
    window.history.replaceState(null, '', '/404');
  }, []);
    return (
        <Header404 />
    );
  };
  


export default NotFound;