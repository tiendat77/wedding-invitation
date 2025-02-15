import { Love_Light, Nunito } from 'next/font/google';

export const nunito = Nunito({
  subsets: ['vietnamese'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const loveLight = Love_Light({
  subsets: ['vietnamese'],
  display: 'swap',
  weight: ['400'],
});
