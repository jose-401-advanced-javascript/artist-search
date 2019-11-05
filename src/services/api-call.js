export const getArtists = (search) => {
  return fetch(`http://musicbrainz.org/ws/2/artst?query=${search}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(({ results: artists }) => artists.map(artist => ({
      
    })
    }))
};