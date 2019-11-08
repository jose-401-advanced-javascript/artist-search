import React, { useState, useEffect } from 'react';
import { getSongs } from '../../services/api-call';
import Songs from '../songs/Songs';
import { useParams } from 'react-router-dom';

const SongsContainer = () => {
  const [songs, setSongs] = useState([]);

  let { id } = useParams();
  let { name } = useParams();

  useEffect(() => {
    getSongs(id)
      .then(songs => setSongs(songs));
  });

  return (
    <>
      <Songs songs={songs} name={name} />
    </>
  );
};

export default SongsContainer;
