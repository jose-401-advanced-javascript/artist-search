import React, { useState } from 'react';
import Artists from '../artists/Artists';
import SearchForm from '../artists/SearchForm';
import { getArtists } from '../../services/api-call';

const ArtistContainer = () => {

  const [artists, setArtists] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    getArtists(query, page)
      .then(artists => {
        setArtists(artists);
      });
  };

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  const decrementPage = () => {
    setPage(page => ({
      page: page - 1
    }), () =>
      getArtists(query, page)
        .then(artists => {
          setPage(artists);
        })
    );
  };

  const incrementPage = () => {
    setPage(page => ({
      page: page + 1
    }), () =>
      getArtists(query, page)
        .then(artists => {
          setPage(artists);
        })
    );
  };

  return (
    <>
      <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} query={query} incrementPage={incrementPage} decrementPage={decrementPage} />
      <Artists artists={artists} />
    </>
  );
};

export default ArtistContainer;

