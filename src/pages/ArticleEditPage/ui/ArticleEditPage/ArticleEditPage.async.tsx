import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignorev
        resolve(import('./ArticleEditPage'));
      }, 500);
    })
);
