import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Albums from '../albums/Albums';
import { getAlbums } from '../../services/api-call';
import { useParams } from 'react-router-dom';

const AlbumContainer = () => {

  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(0);

  const { id, name } = useParams();

  useEffect(() => {
    getAlbums(id, page)
      .then(albums => {
        setAlbums(albums);
      });
  }, []);

  const decrementPage = () => {
    setPage(page => ({
      page: page - 1
    }), () =>
      getAlbums(id, page)
        .then(albums => {
          setPage(albums);
        })
    );
  };

  const incrementPage = () => {
    setPage(page => ({
      page: page + 1
    }), () =>
      getAlbums(id, page)
        .then(albums => {
          setPage(albums);
        })
    );
  };

  return (
    <div>
      <Albums albums={albums} id={id} incrementPage={incrementPage} decrementPage={decrementPage} name={name} />
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