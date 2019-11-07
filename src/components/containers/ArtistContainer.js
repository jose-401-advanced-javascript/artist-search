import React, { useState } from 'react';
import Artists from '../artists/Artists';
import SearchForm from '../artists/SearchForm';
import useArtists from '../../hooks/useArtists';

const ArtistContainer = () => {

  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  const { artists, getArtistsFunction } = useArtists(page, query);

  const handleSubmit = (event) => {
    event.preventDefault();
    getArtistsFunction();
  };

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  const decrementPage = () => {
    setPage(page - 1);
  };

  const incrementPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} query={query} incrementPage={incrementPage} decrementPage={decrementPage} />
      <Artists artists={artists} />
    </>
  );
};

export default ArtistContainer;
