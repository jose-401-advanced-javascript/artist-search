import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    .then()
  }

  render() {

    return (

    )
  }

}