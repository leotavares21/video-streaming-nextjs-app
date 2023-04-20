import { RefObject, useEffect } from 'react';

export function useClickInOut(
  containerRef: RefObject<HTMLElement>,
  toggleRef: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = containerRef?.current;
      const toggleBtn = toggleRef?.current;

      if (
        el?.contains(event.target as Node) ||
        toggleBtn?.contains(event.target as Node)
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [containerRef, toggleRef, handler]);
}
