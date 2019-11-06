import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Albums from '../albums/Albums';
import { getAlbums } from '../../services/api-call';

export default class AlbumContainer extends Component {

  static propTypes = {

  }

  state = {
    albums: [],

  }

  componentDidMount() {
    getAlbums();
  }

  render() {

    const { albums } = this.state;

    return (
      <div>
        <Albums albums={albums} />
      </div>
    );
  }

}