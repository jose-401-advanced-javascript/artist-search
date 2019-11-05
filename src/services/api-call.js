export const getArtists = (search) => {
  return fetch(`http://musicbrainz.org/ws/2/artst?query=${search}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(({ results: artists }) => artists.map(artist => ({
      id: artist.id,
      name: artist.name,
      country: artist.area.country,
      tags: [artist.tags[0].name, artist.tags[1].name, artist.tags[2].name]
    })
    ));
};
