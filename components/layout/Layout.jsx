import { Lato } from 'next/font/google';
const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className={`${lato.className} container`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
