import React from 'react';
import MovieCard from './MovieCard';

export function Movies(props) {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => {
          return <MovieCard key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h3>Nothing was found :(</h3>
      )}
    </div>
  );
}
