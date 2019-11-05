import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Artists from '../../components/artists/Artists';
import SearchForm from '../../components/artists/SearchForm';
import { getArtists } from '../../services/api-call';

export default class Main extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    artists: [],
    query: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.query);
    getArtists(this.state.query)
      .then(artists => {
        this.setState({ artists });
        console.log(this.state.artists);
      });

  }
   
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { artists } = this.state;
    return (
      <>
        <Artists artists={artists} />
        <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} query={this.state.query}/>
      </>
    );
  }

}