export const getArtists = (search) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`)
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
  // .then(res => console.log(res))
};
