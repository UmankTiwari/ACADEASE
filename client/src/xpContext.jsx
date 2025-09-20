import React, { createContext, useContext, useState, useEffect } from 'react';

const XPContext = createContext({
  totalXP: 0,
  badges: [],
  addXP: () => {},
  addBadge: () => {},
  completeCommand: () => {},
  completedCommands: {},
});

export const useXP = () => {
  return useContext(XPContext);
};

export const XPProvider = ({ children }) => {
  const [totalXP, setTotalXP] = useState(() => {
    const savedXP = localStorage.getItem('totalXP');
    return savedXP ? parseInt(savedXP) : 0;
  });
  
  const [badges, setBadges] = useState(() => {
    const savedBadges = localStorage.getItem('badges');
    return savedBadges ? JSON.parse(savedBadges) : [];
  });
  
  const [completedCommands, setCompletedCommands] = useState(() => {
    const savedCompleted = localStorage.getItem('completedCommands');
    return savedCompleted ? JSON.parse(savedCompleted) : {};
  });

  useEffect(() => {
    localStorage.setItem('totalXP', totalXP.toString());
  }, [totalXP]);

  useEffect(() => {
    localStorage.setItem('badges', JSON.stringify(badges));
  }, [badges]);

  useEffect(() => {
    localStorage.setItem('completedCommands', JSON.stringify(completedCommands));
  }, [completedCommands]);

  const addXP = (amount) => {
    setTotalXP((prevXP) => prevXP + amount);
  };

  const addBadge = (newBadge) => {
    if (!badges.some(badge => badge.name === newBadge.name)) {
      setBadges((prevBadges) => [...prevBadges, newBadge]);
    }
  };

  const completeCommand = (topicId, cmd) => {
    const topicCompleted = completedCommands[topicId] || [];
    if (topicCompleted.includes(cmd)) {
      return;
    }

    addXP(10);

    const newCompleted = { ...completedCommands, [topicId]: [...topicCompleted, cmd] };
    setCompletedCommands(newCompleted);

    if (newCompleted[topicId].length >= 5) {
      addBadge({
        name: `${topicId} Explorer`,
        icon: '🌟',
        description: `You've completed 5 commands in the ${topicId} topic!`,
      });
    }
  };

  const value = { 
    totalXP, 
    badges, 
    addXP, 
    addBadge, 
    completeCommand, 
    completedCommands 
  };

  return <XPContext.Provider value={value}>{children}</XPContext.Provider>;
};