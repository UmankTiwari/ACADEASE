import React, { useState } from 'react';
import { useXP } from '../xpContext';

const BadgeDisplay = () => {
  const { badges } = useXP();
  const [showAll, setShowAll] = useState(false);

  if (badges.length === 0) {
    return (
      <div className="text-center">
        <div className="text-2xl">🏆</div>
        <div className="text-sm text-gray-500">No badges yet</div>
      </div>
    );
  }

  const displayBadges = showAll ? badges : badges.slice(0, 3);

  return (
    <div className="relative">
      <div className="flex -space-x-2">
        {displayBadges.map((badge, index) => (
          <div
            key={index}
            className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center text-sm cursor-pointer hover:scale-110 transition-transform"
            title={badge.name}
          >
            {badge.icon}
          </div>
        ))}
        {badges.length > 3 && !showAll && (
          <div
            className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center text-xs text-white cursor-pointer hover:scale-110 transition-transform"
            onClick={() => setShowAll(true)}
            title={`+${badges.length - 3} more badges`}
          >
            +{badges.length - 3}
          </div>
        )}
      </div>
      
      {showAll && (
        <div className="absolute top-10 right-0 bg-white rounded-lg shadow-lg p-4 min-w-64 z-10">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-900">Your Badges</h3>
            <button
              onClick={() => setShowAll(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          <div className="space-y-2">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-lg">{badge.icon}</span>
                <div>
                  <div className="font-medium text-sm">{badge.name}</div>
                  <div className="text-xs text-gray-500">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BadgeDisplay;