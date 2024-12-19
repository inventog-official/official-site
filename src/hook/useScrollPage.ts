import { useEffect } from 'react';

function useScrollToId(id: string | null) {
  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [id]);
}

export default useScrollToId;