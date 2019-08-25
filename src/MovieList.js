import React from 'react';

const Movies = (props) => {
  console.log(props, ' props in movieList')
  const movieList = props.movies.map((movie) => {
    return (
      <li key={movie._id}>
        <span>{movie.title}</span><br/>
        <span>{movie.actors}</span><br/>
        <span>{movie.writers}</span><br/>
        <button onClick={props.deleteMovie.bind(null, movie._id)}>Delete</button><br/>
        <button onClick={props.showModal.bind(null, movie)}>edit</button>
      </li>
      )
  })

  return (
    <div>
      <h3>Movies</h3>
      <ul>
        {movieList}
      </ul>
    </div>
    )
}

export default Movies;