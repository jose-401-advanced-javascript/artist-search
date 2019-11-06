import React from 'react';
import PropTypes from 'prop-types';
import ArtistCard from '../artists/ArtistCard';

const AlbumCard = ({ id, title, image }) => {

  return (
    <div key={id}>
      <p>{title}</p>
      <img src={image} />
    </div>
  );
};

AlbumCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default ArtistCard;