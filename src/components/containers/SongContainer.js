import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSongs } from '../../services/api-call';
import Songs from '../songs/Songs';
import { useParams } from 'react-router-dom';

const SongContainer = () => {

  const [songs, setSongs] = useState([]);

  const { id, name } = useParams();

  useEffect(() => {
    getSongs(id)
      .then(songs => {
        setSongs(songs);
      });
  }, []);

  return (
    <>
      <Songs songs={songs} name={name} />
    </>
  );
};

SongContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default SongContainer;