import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useXP } from '../xpContext';

const ComputerBasics = () => {
  const [currentTopic, setCurrentTopic] = useState(0);
  const { addXP, addBadge } = useXP();

  const topics = [
    {
      id: 'hardware',
      title: 'Computer Hardware',
      description: 'Understanding the physical components of a computer',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Main Hardware Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-600">CPU (Central Processing Unit)</h4>
              <p className="text-sm text-gray-600">The "brain" of the computer that processes instructions</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-600">RAM (Random Access Memory)</h4>
              <p className="text-sm text-gray-600">Temporary storage for data and programs currently in use</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-600">Storage (HDD/SSD)</h4>
              <p className="text-sm text-gray-600">Permanent storage for files, programs, and operating system</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-red-600">Motherboard</h4>
              <p className="text-sm text-gray-600">Main circuit board that connects all components</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'software',
      title: 'Software and Operating Systems',
      description: 'Understanding programs and how computers work',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Types of Software</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Operating System (OS)</h4>
              <p className="text-sm text-gray-600">Manages hardware and provides interface for applications (Windows, macOS, Linux)</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Application Software</h4>
              <p className="text-sm text-gray-600">Programs that perform specific tasks (browsers, games, office suites)</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">System Software</h4>
              <p className="text-sm text-gray-600">Programs that help manage and maintain the computer (drivers, utilities)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'networking',
      title: 'Networks and Internet',
      description: 'How computers communicate and share information',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Computer Networks</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Types of Networks:</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>LAN (Local Area Network):</strong> Computers in the same building</li>
              <li><strong>WAN (Wide Area Network):</strong> Computers across large distances</li>
              <li><strong>Internet:</strong> Global network connecting millions of computers</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">How the Internet Works:</h4>
            <p className="text-sm text-blue-700">Data is broken into packets, sent through routers, and reassembled at the destination</p>
          </div>
        </div>
      )
    }
  ];

  const completeTopic = () => {
    addXP(30);
    addBadge({
      name: 'Computer Expert',
      icon: '💻',
      description: 'Learned about computer basics!'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-lg p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">💻 Computer Basics</h1>
              <p className="text-gray-600">Understanding how computers work</p>
            </div>
            <Link 
              to="/" 
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Topic Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Topics</h3>
              <div className="space-y-2">
                {topics.map((topic, index) => (
                  <button
                    key={topic.id}
                    onClick={() => setCurrentTopic(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentTopic === index
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-medium">{topic.title}</div>
                    <div className="text-sm opacity-75">{topic.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Topic Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {topics[currentTopic].title}
                </h2>
                <p className="text-gray-600">{topics[currentTopic].description}</p>
              </div>
              
              <div className="mb-8">
                {topics[currentTopic].content}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  {currentTopic > 0 && (
                    <button
                      onClick={() => setCurrentTopic(currentTopic - 1)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      ← Previous
                    </button>
                  )}
                  {currentTopic < topics.length - 1 && (
                    <button
                      onClick={() => setCurrentTopic(currentTopic + 1)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Next →
                    </button>
                  )}
                </div>
                
                <button
                  onClick={completeTopic}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Complete Topic (+30 XP)
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComputerBasics;
