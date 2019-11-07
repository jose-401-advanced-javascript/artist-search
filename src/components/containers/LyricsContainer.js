import React from 'react';
import LyricCard from '../../components/lyrics/LyricCard';
import useLyrics from '../../hooks/useLyrics';

const LyricsContainer = () => {

  const { lyric } = useLyrics();

  return (
    <LyricCard lyric={lyric.lyrics} />
  );
};

export default LyricsContainer;