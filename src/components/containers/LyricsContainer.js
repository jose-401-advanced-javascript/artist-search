import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LyricCard from '../../components/lyrics/LyricCard';
import { getLyrics } from '../../services/api-call';
import { useParams } from 'react-router-dom';

const LyricsContainer = () => {

  const [lyric, setLyric] = useState({});

  const { title, name } = useParams();

  useEffect(() => {
    getLyrics(title, name)
      .then(lyric => {
        setLyric(lyric);
      });
  }, []);

  return (
    <LyricCard lyric={lyric.lyrics} />
  );
};

LyricsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default LyricsContainer;