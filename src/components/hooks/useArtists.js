import { useState, useEffect, useRef } from 'react';
import { getArtists } from '../../services/api-call';


const useArtists = (page) => {
  const [artists, setArtists] = useState([]);
  const [query, setQuery] = useState('');
  const [artist, setArtist] = useState('');


  const didMountRef = useRef(false);

  const getArtistsFunction = () => {
    getArtists(artist, page)
      .then(artists => setArtists(artists));
  };

  useEffect(() => {
    if(didMountRef.current) getArtistsFunction();
    didMountRef.current = true;
  }, [page, artist]);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setArtist(query);
  };

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  return { artists, query, handleSubmit, handleChange };
};

export default useArtists;