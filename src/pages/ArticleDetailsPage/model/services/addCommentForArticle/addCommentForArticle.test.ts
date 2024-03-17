import { addCommentForArticle } from './addCommentForArticle';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data = {
  id: '1',
  user: {
    id: '1',
    username: 'user1',
  },
  text: 'comment1',
};

describe('addCommentForArticle.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: { authData: { id: '1', username: 'user1' } },
      articleDetails: { data: { id: '1' } },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('comment1');

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: { authData: { id: '1', username: 'user1' } },
      articleDetails: { data: { id: '1' } },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('comment1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
