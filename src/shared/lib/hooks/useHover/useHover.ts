import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHoverResut = [boolean, UseHoverBind];

export const useHover: () => UseHoverResut = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(
    () => [
      isHover,
      {
        onMouseEnter,
        onMouseLeave,
      },
    ],
    [isHover, onMouseLeave, onMouseEnter]
  );
};
