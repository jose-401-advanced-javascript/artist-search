import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LyricCard from '../../components/lyrics/LyricCard';
import { getLyrics } from '../../services/api-call';

export default class LyricsContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        title: PropTypes.string,
        name: PropTypes.string.isRequired,
      }).isRequired
    }).isRequired
  }

  state = {
    lyric: {}
  }

  componentDidMount() {
    getLyrics(this.props.match.params.title, this.props.match.params.name)
      .then(lyric => {
        
        this.setState({ lyric });
      });
  }

  render() {
    return (
      <LyricCard lyric={this.state.lyric.lyrics}/>
    );
  }
}