import React from 'react';
import Songs from '../songs/Songs';
import useRecordings from '../hooks/useRecordings';

const SongsContainer = () => {
  const { songs, name } = useRecordings();
  return (
    <>
      <Songs songs={songs} name={name} />
    </>
  );
};

export default SongsContainer;
