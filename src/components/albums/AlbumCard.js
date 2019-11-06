import React from 'react';
import PropTypes from 'prop-types';
import ArtistCard from '../artists/ArtistCard';
import { Link } from 'react-router-dom';

const AlbumCard = ({ id, title, image }) => {

  return (
    <Link to={`/albums/${id}`}>
      <p>{title}</p>
      {<img src={image}/>}
    </Link>
  );
};

AlbumCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default ArtistCard;