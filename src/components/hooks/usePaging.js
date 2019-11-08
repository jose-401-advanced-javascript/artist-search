import { useState } from 'react';

const usePaging = () => {
  const [page, setPage] = useState(0);

  const decrementPage = () => {
    setPage(page - 1);
  };

  const incrementPage = () => {
    setPage(page + 1);
  };

  return { page, decrementPage, incrementPage };
};

export default usePaging;