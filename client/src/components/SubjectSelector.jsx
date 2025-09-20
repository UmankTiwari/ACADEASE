import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SubjectCard from '../components/SubjectCard';

// Mock data for subjects per class level
const subjectData = {
  6: ['Mathematics', 'Science', 'English', 'History'],
  7: ['Mathematics', 'Science', 'English', 'Geography'],
  8: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
  9: ['Physics', 'Chemistry', 'Biology', 'Social Studies'],
  10: ['Advanced Math', 'Physics', 'Chemistry', 'Literature'],
  11: ['Calculus', 'Modern Physics', 'Organic Chemistry', 'World History'],
  12: ['Linear Algebra', 'Quantum Mechanics', 'Biochemistry', 'Philosophy'],
};

const SubjectSelector = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  const subjects = subjectData[level] || [];

  const handleSubjectClick = (subject) => {
    // URL-encode the subject name to handle spaces or special characters
    const encodedSubject = encodeURIComponent(subject);
    navigate(`/class/${level}/subject/${encodedSubject}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose a Subject for Class {level}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <SubjectCard key={subject} subjectName={subject} onClick={() => handleSubjectClick(subject)} />
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;