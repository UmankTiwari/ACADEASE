import React from 'react';

const TipBox = ({ text }) => {
  if (!text) return null;

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-4 rounded-r-lg">
      <p className="font-bold">💡 Tip</p>
      <p>{text}</p>
    </div>
  );
};

export default TipBox;