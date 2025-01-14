import React from 'react';

const MovieCard = ({ image, name, releaseDate, rating }) => {
  return (
    <div className="max-w-sm bg-gray-800 text-white shadow-md rounded-lg overflow-hidden">
      {/* Movie Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      
      {/* Movie Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-red-500">{name}</h2>
        <p className="mt-2 text-gray-400">
          <strong>Release Date:</strong> {releaseDate}
        </p>
        <p className="mt-2">
          <strong>Rating:</strong>{' '}
          <span
            className={`${
              rating >= 8
                ? 'text-green-500'
                : rating >= 5
                ? 'text-yellow-500'
                : 'text-red-500'
            } font-semibold`}
          >
            {rating}/10
          </span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
