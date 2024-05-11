import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments';

describe('comments', () => {
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comment: { isLoading: true },
      },
    };
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty loading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comment: { error: 'error' },
      },
    };
    expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
  });
});
