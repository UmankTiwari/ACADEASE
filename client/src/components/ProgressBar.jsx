import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ currentXP, nextLevelXP }) => {
  // Calculate the percentage, ensuring it's between 0 and 100.
  const percent = nextLevelXP > 0 ? Math.min((currentXP / nextLevelXP) * 100, 100) : 0;

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700">XP</span>
        <span className="text-sm font-medium text-blue-700">{currentXP} / {nextLevelXP}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <motion.div
          className="bg-blue-600 h-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ maxWidth: '100%' }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;