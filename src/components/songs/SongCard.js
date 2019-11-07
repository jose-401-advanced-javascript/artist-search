import React from 'react';
import PropTypes from 'prop-types';
// import styles from './AlbumCard.css';

const SongCard = ({ id, title }) => {

  return (
    <div key={id}>
      <p>{title}</p>
    </div>
  );
};

SongCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SongCard;