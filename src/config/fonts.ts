import { Love_Light, Nunito, Dancing_Script } from 'next/font/google';

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

export const dancingScript = Dancing_Script({
  subsets: ['vietnamese'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
