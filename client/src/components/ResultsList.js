import React from 'react';

function ResultsList({ results }) {
  return (
    <div className="results-list space-y-4">
      {results.map((result, index) => (
        <div key={index} className="result-item p-4 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{result.title}</h3>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ResultsList;