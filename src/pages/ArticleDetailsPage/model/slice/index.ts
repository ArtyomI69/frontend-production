import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentReducer } from './articleDetailsCommentSlice';
import { articleDetailsPageRecomendationsReducer } from './articleDetailsPageRecomendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recomendations: articleDetailsPageRecomendationsReducer,
  comment: articleDetailsCommentReducer,
});
