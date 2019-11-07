import React from 'react';
import PropTypes from 'prop-types';

const LyricCard = ({ lyric }) => {

  return (
    <div>
      <p>{lyric}</p>
    </div>
  );
};

LyricCard.propTypes = {
  lyric: PropTypes.string.isRequired
};

export default LyricCard;