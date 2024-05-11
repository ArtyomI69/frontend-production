import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { fetchArticleRecomendations } from '../services/fetchArticleRecomendations/fetchArticleRecomendations';
import { ArticleDetailsRecomendationsSchema } from '../types/ArticleDetailsRecomendationsSchema';

const recomendationsAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

export const getArticleRecomendations = recomendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recomendations || recomendationsAdapter.getInitialState()
);

const articleDetailsPageRecomendationsSlice = createSlice({
  name: 'articleDetailsPageRecomendationsSlice',
  initialState: recomendationsAdapter.getInitialState<ArticleDetailsRecomendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecomendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecomendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recomendationsAdapter.setAll(state, action);
      })
      .addCase(fetchArticleRecomendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecomendationsReducer } =
  articleDetailsPageRecomendationsSlice;
