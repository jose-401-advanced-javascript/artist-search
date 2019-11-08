import { useState, useEffect } from 'react';
import { getSongs } from '../../services/api-call';
import { useParams } from 'react-router-dom';


const useRecordings = () => {
  const [songs, setSongs] = useState([]);

  let { id } = useParams();
  let { name } = useParams();

  useEffect(() => {
    getSongs(id)
      .then(songs => setSongs(songs));
  });

  return { songs, name };
};

export default useRecordings;