import React, { useState } from 'react';

const PracticeCommand = ({ targetCmd, onSuccess }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const trimmedInput = inputValue.trim();

      if (trimmedInput === targetCmd) {
        onSuccess();
        setInputValue('');
        setError(null);
      } else {
        setError(`'${trimmedInput}' is not recognized. Try again.`);
      }
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg my-4">
      <label htmlFor="command-input" className="block text-sm font-medium text-gray-400 mb-1">
        Practice the command:
      </label>
      <div className="flex items-center bg-black p-2 rounded-md">
        <span className="text-green-400 font-mono">$</span>
        <input
          id="command-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-green-400 font-mono focus:outline-none ml-2"
          placeholder={`Type '${targetCmd}' and press Enter`}
          autoComplete="off"
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
};

export default PracticeCommand;