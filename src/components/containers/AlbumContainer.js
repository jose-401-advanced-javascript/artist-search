import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Albums from '../albums/Albums';
import { getAlbums } from '../../services/api-call';
import { useParams } from 'react-router-dom';

const AlbumContainer = () => {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(0);

  let { id } = useParams();
  let { name } = useParams();

  const getAlbumsFunction = () => {
    getAlbums(id, page)
      .then(albums => setAlbums(albums));
  };

  useEffect(() => {
    getAlbumsFunction();
  }, [page]);

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

AlbumContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default AlbumContainer;