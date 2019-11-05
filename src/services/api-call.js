export const getArtists = (search) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(results => {
      console.log(results);
      return results.artists.map(artist => {
        console.log(artist);
        return {
          id: artist.id,
          name: artist.name || '',
          country: artist.area ? artist.area.name : '',
          tags: artist.tags ? [artist.tags[0].name || '', artist.tags[1].name || '', artist.tags[2].name || ''] : ['']
        };
      });
    });
  // .then(res => console.log(res))
};
