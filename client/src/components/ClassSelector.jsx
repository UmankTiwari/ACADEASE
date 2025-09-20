import React from 'react';
import { useNavigate } from 'react-router-dom';
import ClassCard from '../components/ClassCard';

const ClassSelector = () => {
  const classes = [6, 7, 8, 9, 10, 11, 12];
  const navigate = useNavigate();

  const handleClick = (level) => {
    navigate(`/class/${level}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose Your Class</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {classes.map((level) => (
          <ClassCard key={level} classLevel={level} onClick={() => handleClick(level)} />
        ))}
      </div>
    </div>
  );
};

export default ClassSelector;