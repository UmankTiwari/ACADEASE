import React from 'react';

const ServerUseList = ({ uses }) => {
  if (!uses || uses.length === 0) return null;

  return (
    <div className="space-y-4">
      {uses.map((use, index) => (
        <div key={index} className="flex items-center">
          <span className="text-2xl mr-4">{use.icon}</span>
          <div>
            <h4 className="font-bold">{use.title}</h4>
            <p className="text-sm text-gray-600">{use.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServerUseList;