import React, { useEffect } from 'react';

interface Props {
  preventRef: any;
  obsRef: any;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const InfiniteScroll = ({ preventRef, obsRef, setPage }: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, {
      threshold: 0.5,
      rootMargin: '80px',
    });
    if (obsRef.current) observer.observe(obsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const obsHandler = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage(prev => prev + 1);
    }
  };
};

export default InfiniteScroll;
