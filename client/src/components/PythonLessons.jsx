import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useXP } from '../xpContext';

const PythonLessons = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const { addXP, addBadge } = useXP();

  const lessons = [
    {
      id: 'intro',
      title: 'Introduction to Python',
      description: 'Learn the basics of Python programming',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">What is Python?</h3>
          <p>Python is a high-level, interpreted programming language known for its simplicity and readability.</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Your first Python program:</h4>
            <pre className="bg-black text-green-400 p-3 rounded text-sm">
{`print("Hello, World!")`}
            </pre>
          </div>
        </div>
      )
    },
    {
      id: 'variables',
      title: 'Variables and Data Types',
      description: 'Understanding how to store and manipulate data',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Variables in Python</h3>
          <p>Variables are containers for storing data values.</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Examples:</h4>
            <pre className="bg-black text-green-400 p-3 rounded text-sm">
{`name = "Alice"
age = 25
height = 5.6
is_student = True`}
            </pre>
          </div>
        </div>
      )
    },
    {
      id: 'graphics',
      title: 'Graphics with Turtle',
      description: 'Create beautiful graphics using Python Turtle',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Python Turtle Graphics</h3>
          <p>Create drawings and animations using the turtle module.</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Draw a square:</h4>
            <pre className="bg-black text-green-400 p-3 rounded text-sm">
{`import turtle

t = turtle.Turtle()
for i in range(4):
    t.forward(100)
    t.right(90)`}
            </pre>
          </div>
        </div>
      )
    }
  ];

  const completeLesson = () => {
    addXP(50);
    addBadge({
      name: 'Python Learner',
      icon: '🐍',
      description: 'Completed a Python lesson!'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🐍 Python with Graphics & 3D</h1>
              <p className="text-gray-600">Interactive Python programming lessons</p>
            </div>
            <Link 
              to="/" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Lesson Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Lessons</h3>
              <div className="space-y-2">
                {lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLesson(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentLesson === index
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-medium">{lesson.title}</div>
                    <div className="text-sm opacity-75">{lesson.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {lessons[currentLesson].title}
                </h2>
                <p className="text-gray-600">{lessons[currentLesson].description}</p>
              </div>
              
              <div className="mb-8">
                {lessons[currentLesson].content}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  {currentLesson > 0 && (
                    <button
                      onClick={() => setCurrentLesson(currentLesson - 1)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      ← Previous
                    </button>
                  )}
                  {currentLesson < lessons.length - 1 && (
                    <button
                      onClick={() => setCurrentLesson(currentLesson + 1)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Next →
                    </button>
                  )}
                </div>
                
                <button
                  onClick={completeLesson}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Complete Lesson (+50 XP)
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PythonLessons;
