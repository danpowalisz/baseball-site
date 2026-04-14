import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main id="content">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
