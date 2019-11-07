import { useState, useEffect } from 'react';
import { getAlbums } from '../services/api-call';
import { useParams } from 'react-router-dom';

const useAlbums = (page) => {

  const [albums, setAlbums] = useState([]);

  const { id, name } = useParams();

  const getAlbumsFunction = () => {
    getAlbums(id, page)
      .then(albums => {
        setAlbums(albums);
      });
  };

  useEffect(() => {
    getAlbumsFunction();
  }, [page]);

  return { albums, name };

};

export default useAlbums;
