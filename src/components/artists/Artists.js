import React from 'react';
import PropTypes from 'prop-types';
import ArtistCard from './ArtistCard';

const Artists = ({ artists }) => {

  const artistElements = artists.map(artist => {
    return (
      <li key={artist.id}>
        <ArtistCard {...artist} />
      </li>
    );
  });

  return (
    <ul>
      {artistElements}
    </ul>
  );
};

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }))
};

export default Artists;
