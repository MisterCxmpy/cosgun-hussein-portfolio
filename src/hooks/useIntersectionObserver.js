import { useEffect, useRef } from 'react';

function useIntersectionObserver(ref, styles, amount) {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(styles['hidden']);
            entry.target.classList.add(styles['show']);
          }
        });
      },
      {
        rootMargin: `0px 0px ${amount}% 0px`,
      }
    )
  );

  useEffect(() => {
    observer.current.observe(ref.current);
    return () => observer.current.disconnect();
  }, [ref, styles]);

  return observer.current;
}

export default useIntersectionObserver;