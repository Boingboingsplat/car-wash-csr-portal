import { Alegreya, Nunito_Sans, Red_Rose } from "next/font/google";

export const alegreya = Alegreya({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const redRose = Red_Rose({
    subsets: ['latin'],
    weight: '700',
});

export const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['400', '500'],
});