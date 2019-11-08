import React from 'react';
import Albums from '../albums/Albums';
import usePaging from '../hooks/usePaging';
import useReleases from '../hooks/useReleases';

const AlbumContainer = () => {
  const { incrementPage, decrementPage, page } = usePaging();
  const { albums, name } = useReleases(page); 

  return (
    <div>
      <Albums albums={albums} incrementPage={incrementPage} decrementPage={decrementPage} name={name} />
    </div>
  );

};

export default AlbumContainer;