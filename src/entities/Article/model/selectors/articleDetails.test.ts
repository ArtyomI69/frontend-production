import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './articleDetails';

describe('articleDetails', () => {
  const data = {
    id: '1',
    title: 'subtitle',
  };

  test('should return data value', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('should return data value', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return error value', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'some error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('some error');
  });

  test('should work with empty data value', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test('should work with empty isLoading value', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should work with empty error value', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
