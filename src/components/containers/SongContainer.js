import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSongs } from '../../services/api-call';
import Songs from '../songs/Songs';

export default class SongsContainer extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    songs: []
  }

  render() {
    const { songs } = this.state;
    return (
      <>
        <Songs songs={songs} />
      </>
    );
  }

}