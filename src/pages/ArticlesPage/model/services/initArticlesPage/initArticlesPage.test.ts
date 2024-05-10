import { initArticlesPage } from './initArticlesPage';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');
jest.mock('../../slices/articlePageSlice');

describe('initArticlesPage.test', () => {
  test('if inited false', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    });

    await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(articlesPageActions.initState).toBeCalled();
    expect(fetchArticlesList).toBeCalled();
  });

  test('if there is query params', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    });

    const urlSearchParams = new URLSearchParams('?sort=desc&search=123');
    await thunk.callThunk(urlSearchParams);

    expect(thunk.dispatch).toBeCalledTimes(6);
    expect(articlesPageActions.initState).toBeCalled();
    expect(fetchArticlesList).toBeCalled();
  });

  test('if inited true', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    });

    await thunk.callThunk(new URLSearchParams());

    expect(articlesPageActions.initState).not.toBeCalled();
    expect(fetchArticlesList).not.toBeCalled();
  });
});
