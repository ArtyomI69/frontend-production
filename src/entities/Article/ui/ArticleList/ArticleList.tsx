import { Article, ArticleView } from '../../model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, idx) => <ArticleListItemSkeleton className={cls.card} key={idx} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL } = props;

  const renderArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} className={cls.card} />;
  };

  if (isLoading) {
    return <div className={classNames('', {}, [className, cls[view]])}>{getSkeletons(view)}</div>;
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
});
