import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSongs } from '../../services/api-call';
import Songs from '../songs/Songs';

export default class SongsContainer extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        title: PropTypes.string,
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    songs: []
  }

  componentDidMount() {
    getSongs(this.props.match.params.id)
      .then(songs => {
        this.setState({ songs });
      });
  }

  render() {
    const { songs } = this.state;
    return (
      <>
        <Songs songs={songs} name={this.props.match.params.name} />
      </>
    );
  }
}