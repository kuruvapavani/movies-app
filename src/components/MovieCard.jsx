import React from "react";

const MovieCard = ({ image, name, releaseDate, rating }) => {
  return (
    <div className="max-w-sm bg-gray-900 text-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
      {/* Movie Image */}
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      {/* Movie Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-red-600 truncate">{name}</h2>
        <p className="mt-2 text-gray-400 text-sm">
          <strong>Release Date:</strong> {releaseDate}
        </p>
        <p className="mt-2">
          <strong>Rating:</strong>{" "}
          <span
            className={`${
              rating >= 8
                ? "text-green-400"
                : rating >= 5
                ? "text-yellow-400"
                : "text-red-400"
            } font-semibold`}
          >
            {rating.toFixed(1)}/10
          </span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
