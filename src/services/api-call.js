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

export const getAlbums = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(results => {
      return results.releases.map(release => {
        return {
          id: release.id,
          title: release.title,
          image: release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : 'https://pinoyalbums.com/wp-content/uploads/2014/12/No-Album-Art-Cover.png'
        };
      });
    });
};
