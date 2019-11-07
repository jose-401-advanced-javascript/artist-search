import React from 'react';
import PropTypes from 'prop-types';
// import styles from './AlbumCard.css';
import { Link } from 'react-router-dom';


const SongCard = ({ id, title }) => {

  return (
    <div key={id}>
      <Link to={`/songs/${id}`}>
        <p>{title}</p>
      </Link>
    </div>
  );
};

SongCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SongCard;