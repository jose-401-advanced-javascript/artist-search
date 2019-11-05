import React from 'react';
import PropTypes from 'prop-types';
import ArtistCard from './ArtistCard';

const Artists = ({ artists }) => {

  const artistElements = artists.map(artist => {
    <li>
      <ArtistCard artist.name
    </li>
  })

  return (
    <ul>
      {artistElements}
    </ul>
  )

};

export default Artists;
