import React from 'react';
import Artists from '../artists/Artists';
import SearchForm from '../artists/SearchForm';
import usePaging from '../hooks/usePaging';
import useArtists from '../hooks/useArtists';


const ArtistContainer = () => {
  const { incrementPage, decrementPage, page } = usePaging();
  const { artists, query, handleChange, handleSubmit } = useArtists(page);

  return (
    <>
      <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} query={query} incrementPage={incrementPage} decrementPage={decrementPage} />
      <Artists artists={artists} />
    </>
  );
};


export default ArtistContainer;