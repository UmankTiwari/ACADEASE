const mockData = {
  classes: [6, 7, 8, 9, 10, 11, 12],
  subjects: {
    6: ['Mathematics', 'Science', 'English', 'History'],
    7: ['Mathematics', 'Science', 'English', 'Geography'],
    8: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
    9: ['Physics', 'Chemistry', 'Biology', 'Social Studies'],
    10: ['Advanced Math', 'Physics', 'Chemistry', 'Literature'],
    11: ['Calculus', 'Modern Physics', 'Organic Chemistry', 'World History'],
    12: ['Linear Algebra', 'Quantum Mechanics', 'Biochemistry', 'Philosophy'],
  },
  syllabus: {
    6: {
      Mathematics: { topics: ['Algebra', 'Geometry', 'Arithmetic'], description: 'Foundational math concepts.' },
      Science: { topics: ['Biology', 'Basic Chemistry', 'Earth Science'], description: 'Introduction to natural sciences.' },
    },
    // Add more syllabus data as needed
  },
};

const getClasses = (req, res) => {
  res.json(mockData.classes);
};

const getSubjects = (req, res) => {
  const { level } = req.params;
  const subjects = mockData.subjects[level];

  if (subjects) {
    res.json(subjects);
  } else {
    res.status(404).json({ error: `Subjects for class ${level} not found.` });
  }
};

const getSyllabus = (req, res) => {
  const { level, subject } = req.params;
  const syllabus = mockData.syllabus[level]?.[subject];

  if (syllabus) {
    res.json(syllabus);
  } else {
    res.status(404).json({ error: `Syllabus for ${subject} in class ${level} not found.` });
  }
};

module.exports = {
  getClasses,
  getSubjects,
  getSyllabus,
};