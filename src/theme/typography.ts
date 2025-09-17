import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  variable: '--font-montserrat',
});

export const oswald = localFont({
  display: 'swap',
  variable: '--font-oswald',
  fallback: ['sans-serif'],
  src: [
    {
      path: '../../../public/assets/fonts/Oswald-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/Oswald-Light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/Oswald-Regular.ttf',
      weight: '400',
      style: 'italic',
    },
  
  ],
});

export const REM_BASE = 16;

