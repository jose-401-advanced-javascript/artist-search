import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Albums from '../albums/Albums';
import { getAlbums, getAlbumArt } from '../../services/api-call';
import ArtistCard from '../artists/ArtistCard';

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

  addAlbumArt = (arr) => {
    return arr.map(album => {
      const coverArt = getAlbumArt(album.id);
      return {
        id: album.id,
        title: album.title,
        cover: coverArt
      };
    });
  }

  componentDidMount() {
    getAlbums(this.props.match.params.id)
      .then(albums => {
        this.setState({ albums: this.addAlbumArt(albums) });
        console.log(this.state.albums);
      });
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