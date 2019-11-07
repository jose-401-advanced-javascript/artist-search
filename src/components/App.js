import React from 'react';
import ArtistContainer from './containers/ArtistContainer ';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AlbumContainer from './containers/AlbumContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SongsContainer from './containers/SongContainer';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ArtistContainer} />
        <Route path="/albums/:id/:name" component={AlbumContainer} />
        <Route path="/songs/:id/:name" component={SongsContainer} />
      </Switch>
      <Footer />
    </Router>
  );
}
