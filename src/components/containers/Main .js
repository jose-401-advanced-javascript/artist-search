import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Artists from '../../components/artists/Artists';
import Search
import { getArtists } from '../../services/api-call';

export default class Main extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    artists: [],
    query: ''
  }

  handleOnClick() {
    getArtists(this.state.query)
      .then(artists => this.setState({ artists }));
    console.log(this.state.artists);

  }

  handleSubmit() {
    event.preventDefault();
  }

  render() {
    const { artists } = this.state;
    return (
      <>
        <Artists artists={artists} />
      </>
    );
  }

}