import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const isEdit = Boolean(id);

  return (
    <div className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? t('Редактирование статьи с ID=') + id : t('Создание новой статьи')}
    </div>
  );
});

export default ArticleEditPage;
