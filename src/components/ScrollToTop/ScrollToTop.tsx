import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the intentional route-change trigger.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
