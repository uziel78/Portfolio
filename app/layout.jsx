'use client';

import './globals.scss';
import { Karla } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const karla = Karla({ subsets: ['latin'], variables: {} });

export const metadata = {
  title: 'Portfolio Page',
  description: 'Portfolio Page from Rune H, 2023',
  keywords: 'Frontend-developer, homepage, norway, bergen, next.js, sass',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={karla.className}>
        <Navbar />
        <div className='container'>
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
