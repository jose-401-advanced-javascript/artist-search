import { useState, useEffect, useRef } from 'react';
import { getArtists } from '../services/api-call';

const useArtists = (page, query) => {

  const [artists, setArtists] = useState([]);

  const didMountRef = useRef(false);

  const getArtistsFunction = () => {
    getArtists(query, page)
      .then(artists => {
        setArtists(artists);
      });
  };

  useEffect(() => {
    if(didMountRef.current) getArtistsFunction();
    didMountRef.current = true;
  }, [page]);

  return { artists, getArtistsFunction };

}

export default useArtists;
