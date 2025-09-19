import React from 'react';

function ResultsList({ results }) {
  return (
    <div className="results-list">
      {results.map((result, index) => (
        <div key={index} className="result-item">
          <h3>{result.title}</h3>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ResultsList;