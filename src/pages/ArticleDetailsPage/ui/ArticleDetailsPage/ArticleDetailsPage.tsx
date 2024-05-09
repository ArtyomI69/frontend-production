import { ArticleDetails } from 'entities/Article';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamocModuleLoader/DynamicModuleLoader';
import {
  articleDetailsCommentReducer,
  getArticleComments,
} from '../../model/slice/articleDetailsCommentSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentFormAsync } from 'features/addCommentForm';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
          {t('Назад к списку')}
        </Button>
        <div className={classNames('', {}, [className])}>
          <ArticleDetails id={id} />
          <Text className={cls.commentTitle} title={t('Комментарии')} />
          <AddCommentFormAsync onSendComment={onSendComment} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
