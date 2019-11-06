export const getArtists = (search, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=${page * 25}&offset=${page}`)
    .then(res => res.json())
    .then(results => {
      return results.artists.map(artist => {
        return {
          id: artist.id,
          name: artist.name || '',
          country: artist.area ? artist.area.name : '',
          tags: (artist.tags || []).map(tag => tag.name).slice(0, 3)
        };
      });
    });
};

export const getAlbumArt = (albumId) => {
  return fetch(`http://coverartarchive.org/release/${albumId}/front`)
    .then(res => res.json());
};

export const getAlbums = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(result => {
      return results.releases.map(relase => {
        
      }) {
        id: result.releases.id,
        title: result.releases.title
      };
    });
};
