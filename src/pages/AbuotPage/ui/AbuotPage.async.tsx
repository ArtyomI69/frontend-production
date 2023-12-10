import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignorev
        resolve(import('./AboutPage'));
      }, 500);
    })
);
