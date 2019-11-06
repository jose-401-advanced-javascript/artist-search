import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

const Albums = ({ albums }) => {

  const albumElements = albums.map(album => {
    return (
      <li key={album.id}>
        <AlbumCard {...album} />
      </li>
    );
  });

  return (
    <ul>
      {albumElements}
    </ul>
  );
};

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
};

export default Albums;
