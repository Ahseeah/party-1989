import React, { Component } from 'react'
//import { Http2ServerRequest } from 'http2'
const url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'
// save url as a string to you can concatinate with each path (already done)
// save json to file in your app (make new file in your app)
// import json file (add import to top of file)
// call an enumerable (like Array.map, see previous homework example below)
// map over each of the values in the array of movie objects.
// (like below, but each arg will be an object, so use . notation to access attributes)
// ex movies.map(movie => <MovieComponent name={movie.name} src={url + movie.poster_path}/>)

// sample of mapping over cats array
// {cats.map(catImages => (
//   <Octocats catImages={catImages} />
// ))}

// sample of import
// import Response from ./movies.json
class App extends Component {
  render() {
    return (
      <>
        <header />
        <section>
          {' '}
          <img src={url + '4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg'} />
          <img src={url + 'kBf3g9crrADGMc2AMAMlLBgSm2h.jpg'} />
          <img src={url + '3Ri2GReavqSHqWemlP6HYn8i2P9.jpg'} />
        </section>
      </>
    )
  }
}

export default App
