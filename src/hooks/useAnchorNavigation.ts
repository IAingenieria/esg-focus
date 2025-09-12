import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAnchorNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove #
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Delay to ensure the element is rendered
    }
  }, [location]);
};

export default useAnchorNavigation;
