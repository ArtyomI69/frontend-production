import { getUIScrollByPath, uiActions } from 'features/scrollRestoration';
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useLocation } from 'react-router';
import cls from './Page.module.scss';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));
  const dispatch = useAppDispatch();

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(uiActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }));
  }, 500);

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])} onScroll={onScroll}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
