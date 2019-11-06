import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Albums from '../albums/Albums';
import { getAlbums } from '../../services/api-call';

export default class AlbumContainer extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    albums: []
  }

  componentDidMount() {
    getAlbums(this.props.match.params.id)
      .then(albums => {
        this.setState({ albums });
        console.log(this.state.albums);
      });
  }

  render() {

    const { albums } = this.state;

    return (
      <div>
        <Albums albums={albums} id={this.state.albums.id}/>
      </div>
    );
  }

}