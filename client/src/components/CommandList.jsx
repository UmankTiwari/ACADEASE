import React from 'react';

const CommandList = ({ commands, onRunCommand }) => {
  if (!commands || commands.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 rounded-lg p-4 my-4">
      <h3 className="text-lg font-semibold mb-2">Key Commands</h3>
      <ul className="space-y-2">
        {commands.map((command, index) => (
          <li key={index} className="flex items-center justify-between p-2 bg-gray-200 rounded-md text-sm">
            <div>
              <code className="font-mono text-pink-600 bg-gray-100 px-1 rounded">{command.cmd}</code>
              <span className="ml-2 text-gray-700">- {command.description}</span>
            </div>
            <button
              onClick={() => onRunCommand && onRunCommand(command.cmd)}
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-md transition-colors"
            >
              Run
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommandList;