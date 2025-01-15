import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = async (pageNumber) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}`
      );
      const data = await response.json();

      const parsedMovies = data.results.map((movie) => ({
        name: movie.title,
        releaseDate: movie.release_date,
        rating: movie.vote_average,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }));

      setMovies((prevMovies) => [...prevMovies, ...parsedMovies]); // Append new movies
      setHasMore(data.page < data.total_pages); // Check if more pages are available
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(page)
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="text-white py-20">
      <div className="container mx-auto px-4">
        {loading && page === 1 ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {movies.map((movie, index) => (
                <MovieCard
                  key={index}
                  image={movie.image}
                  name={movie.name}
                  releaseDate={movie.releaseDate}
                  rating={movie.rating}
                />
              ))}
            </div>
            {hasMore && (
              <div className="text-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MovieList;
