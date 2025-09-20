import React from 'react';

const SearchBot = ({ onSearchChange }) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search for a topic..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBot;