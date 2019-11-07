import React from 'react';
import Songs from '../songs/Songs';
import useSongs from '../../hooks/useSongs';

const SongContainer = () => {

  const { songs, name } = useSongs();

  return (
    <>
      <Songs songs={songs} name={name} />
    </>
  );
};

export default SongContainer;