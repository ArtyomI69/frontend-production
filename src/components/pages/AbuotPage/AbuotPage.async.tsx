import { lazy } from 'react';

export const AbutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignorev
        resolve(import('./AboutPage'));
      }, 500);
    })
);
