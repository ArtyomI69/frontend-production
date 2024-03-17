import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addComentFormSelectors';

describe('addCommentForm', () => {
  test('should return text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { text: 'some text123' },
    };
    expect(getAddCommentFormText(state as StateSchema)).toEqual('some text123');
  });

  test('should work with empty text', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormText(state as StateSchema)).toEqual('');
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { error: 'error' },
    };
    expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
  });
});
