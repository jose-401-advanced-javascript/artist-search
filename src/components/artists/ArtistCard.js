import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArtistCard.css';

const ArtistCard = ({ id, name, country, tags }) => {

  const tagElements = tags.map((tag, i) => {
    return (
      <p key={i}>{tag}</p>
    );
  });
  return (
    <div key={id} className={styles.ArtistCard}>
      <p>{name}</p>
      <p>{country}</p>
      {tagElements}
    </div>
  );
};

ArtistCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArtistCard;
