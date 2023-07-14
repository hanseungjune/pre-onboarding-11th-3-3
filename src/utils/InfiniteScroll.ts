import React, { MutableRefObject, RefObject, useCallback, useEffect } from 'react';

interface Props {
  preventRef: MutableRefObject<boolean>;
  obsRef: RefObject<HTMLElement>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const InfiniteScroll = ({ preventRef, obsRef, setPage }: Props) => {
  const obsHandler = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage(prev => prev + 1);
    }
  },[preventRef, setPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, {
      threshold: 0.5,
      rootMargin: '80px',
    });
    if (obsRef.current) observer.observe(obsRef.current);

    return () => {
      observer.disconnect();
    };
  }, [obsHandler, obsRef]);
};


export default InfiniteScroll;
