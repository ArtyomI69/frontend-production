import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { Page } from 'widgets/Page/Page';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </Page>
  );
});
