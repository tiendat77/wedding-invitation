import {
  Love_Light,
  Nunito,
  Dancing_Script,
  Great_Vibes,
} from 'next/font/google';

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

export const greatVibes = Great_Vibes({
  subsets: ['vietnamese'],
  display: 'swap',
  weight: ['400'],
});
