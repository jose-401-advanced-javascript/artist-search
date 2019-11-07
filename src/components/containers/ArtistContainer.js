import React, { useState, useEffect, useRef } from 'react';
import Artists from '../artists/Artists';
import SearchForm from '../artists/SearchForm';
import { getArtists } from '../../services/api-call';

const ArtistContainer = () => {

  const [artists, setArtists] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);

  const didMountRef = useRef(false);

  const getArtistsFunction = () => {
    getArtists(query, page)
      .then(artists => {
        setArtists(artists);
      });
  };

  useEffect(() => {
    if(didMountRef.current) getArtistsFunction();
    didMountRef.current = true;
  }, [page]);

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
