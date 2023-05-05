import './globals.scss';
import { Montserrat } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio Page',
  description: 'Portfolio Page from Rune H, 2023',
  keywords: 'Frontend-developer, homepage, norway, bergen, next.js, sass',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Navbar />
        <div className='container'>
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
