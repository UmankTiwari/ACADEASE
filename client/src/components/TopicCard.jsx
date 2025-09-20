import React from 'react';

export default function TopicCard({ title, description, icon, color }) {
  return (
    <div className={`${color} rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 text-white`}>
      <div className="text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-90 mb-4">{description}</p>
        <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-semibold">
          Start Learning →
        </div>
      </div>
    </div>
  );
}