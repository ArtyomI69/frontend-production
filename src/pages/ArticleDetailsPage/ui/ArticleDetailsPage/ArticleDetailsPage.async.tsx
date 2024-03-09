import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignorev
        resolve(import('./ArticleDetailsPage'));
      }, 500);
    })
);
