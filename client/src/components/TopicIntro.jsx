import React from 'react';

const TopicIntro = ({ title, description }) => (
  <div className="mb-4">
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

export default TopicIntro;