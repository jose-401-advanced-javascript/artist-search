import React, { useState } from 'react';
import Albums from '../albums/Albums';
import useAlbums from '../../hooks/useAlbums';

const AlbumContainer = () => {

  const [page, setPage] = useState(0);
  const { albums, name } = useAlbums(page);

  const decrementPage = () => {
    setPage(page - 1);
  };

  const incrementPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <Albums albums={albums} incrementPage={incrementPage} decrementPage={decrementPage} name={name} />
    </div>
  );
};

export default AlbumContainer;