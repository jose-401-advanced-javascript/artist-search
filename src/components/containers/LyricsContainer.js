import React, { useState, useEffect } from 'react';
import LyricCard from '../../components/lyrics/LyricCard';
import { getLyrics } from '../../services/api-call';
import { useParams } from 'react-router-dom';

const LyricsContainer = () => {
  const [lyric, setLyric] = useState([]);

  let { title } = useParams();
  let { name } = useParams();

  useEffect(() => {
    getLyrics(title, name)
      .then(lyric => setLyric(lyric.lyrics));
  });

  return (
    <LyricCard lyric={lyric}/>
  );
};

export default LyricsContainer;