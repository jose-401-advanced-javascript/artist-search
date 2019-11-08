import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';
import styles from './Albums.css';

const Albums = ({ albums, incrementPage, decrementPage, name }) => {

  const albumElements = albums.map(album => {
    return (
      <li key={album.id}>
        <AlbumCard {...album} name={name} />
      </li>
    );
  });

  return (
    <>
      <div className={styles.albumsdiv}>
        <button className={styles.buttonBack} type="button" onClick={decrementPage}>Back</button>
        <button className={styles.buttonForward} type="button" onClick={incrementPage}>Next</button>
      </div>
      <ul className={styles.Albums}>
        {albumElements}
      </ul>
    </>

  );
};

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
  })),
  name: PropTypes.string,
  incrementPage: PropTypes.func,
  decrementPage: PropTypes.func
};

export default Albums;
