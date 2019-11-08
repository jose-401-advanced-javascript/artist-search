import { useState, useEffect } from 'react';
import { getAlbums } from '../../services/api-call';
import { useParams } from 'react-router-dom';

const useReleases = (page) => {
  const [albums, setAlbums] = useState([]);
  let { id } = useParams();
  let { name } = useParams();

  const getAlbumsFunction = () => {
    getAlbums(id, page)
      .then(albums => setAlbums(albums));
  };

  useEffect(() => {
    getAlbumsFunction();
  }, [page]);

  return { albums, name };
};

export default useReleases;