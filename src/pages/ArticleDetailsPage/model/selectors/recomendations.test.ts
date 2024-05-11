import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleRecomendationsError, getArticleRecomendationsIsLoading } from './recomendations';

describe('recomendations', () => {
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        recomendations: { isLoading: true },
      },
    };
    expect(getArticleRecomendationsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty loading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleRecomendationsIsLoading(state as StateSchema)).toEqual(undefined);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        recomendations: { error: 'error' },
      },
    };
    expect(getArticleRecomendationsError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleRecomendationsError(state as StateSchema)).toEqual(undefined);
  });
});
