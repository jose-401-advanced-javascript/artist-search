import React from 'react';
import PropTypes from 'prop-types';
import styles from './AlbumCard.css';

const AlbumCard = ({ id, title, image }) => {

  return (
    <div key={id} className={styles.AlbumCard}>
      <p>{title}</p>
      <img src={image}  />
    </div>
  );
};

AlbumCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default AlbumCard;