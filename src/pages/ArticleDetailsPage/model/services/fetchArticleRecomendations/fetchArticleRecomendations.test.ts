import { fetchArticleRecomendations } from './fetchArticleRecomendations';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data = [
  {
    id: '5',
    title: 'Python news',
    subtitle: 'Python best practices?',
    img: 'https://careers.recruiteecdn.com/image/upload/q_auto,f_auto,w_1920,c_limit/production/images/AmI4/t4i_ehOG8KdK.png',
    views: 1022,
    createdAt: '30.03.2022',
    userId: '2',
    type: ['IT'],
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'Заголовок этого блока',
        paragraphs: [
          'Python — это язык программирования, который широко используется в интернет-приложениях, разработке программного обеспечения, науке о данных и машинном обучении (ML). Разработчики используют Python, потому что он эффективен, прост в изучении и работает на разных платформах. Программы на языке Python можно скачать бесплатно, они совместимы со всеми типами систем и повышают скорость разработки.',
        ],
      },
    ],
  },
];

describe('fetchArticleRecomendations.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleRecomendations);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('rejected', async () => {
    const thunk = new TestAsyncThunk(fetchArticleRecomendations);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
