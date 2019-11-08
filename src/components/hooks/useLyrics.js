import { useState, useEffect } from 'react';
import { getLyrics } from '../../services/api-call';
import { useParams } from 'react-router-dom';


const useLyrics = () => {
  const [lyric, setLyric] = useState('');

  let { title } = useParams();
  let { name } = useParams();

  useEffect(() => {
    getLyrics(title, name)
      .then(lyric => setLyric(lyric));
  });

  return { lyric };
};

export default useLyrics;