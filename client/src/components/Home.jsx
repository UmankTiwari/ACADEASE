import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBot from './SearchBot';
import TopicCard from './TopicCard';
import BadgeDisplay from './BadgeDisplay';
import { useXP } from '../xpContext';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { totalXP, badges } = useXP();

  const topics = [
    {
      id: 'python',
      title: 'Python with Graphics & 3D',
      description: 'Learn Python programming with interactive graphics and 3D visualizations',
      icon: '🐍',
      path: '/topics/python',
      color: 'bg-green-500'
    },
    {
      id: 'computer-basics',
      title: 'Computer Basics',
      description: 'Understand the fundamentals of how computers work',
      icon: '💻',
      path: '/topics/computer-basics',
      color: 'bg-blue-500'
    },
    {
      id: 'terminal',
      title: 'Terminal Basics',
      description: 'Master command line interface and terminal commands',
      icon: '⌨️',
      path: '/topics/terminal',
      color: 'bg-purple-500'
    },
    {
      id: 'bits-transistors',
      title: 'Bits & Transistors',
      description: 'Explore the low-level components that make computers work',
      icon: '⚡',
      path: '/topics/bits-transistors',
      color: 'bg-yellow-500'
    },
    {
      id: 'student-life',
      title: 'Student Life',
      description: 'Manage your academic life and track your progress',
      icon: '🎓',
      path: '/topics/student-life',
      color: 'bg-indigo-500'
    }
  ];

  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Acadease</h1>
              <p className="text-gray-600">Learn smarter, not harder</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-sm text-gray-600">Welcome Back!</div>
                <div className="text-2xl font-bold text-blue-600">Student</div>
                <div className="text-sm text-gray-500">XP: {totalXP}</div>
              </div>
              <BadgeDisplay />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore interactive lessons, master new skills, and track your progress with our gamified learning platform.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="text-3xl mr-4">🎯</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Total XP</h3>
                <p className="text-2xl font-bold text-blue-600">{totalXP}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="text-3xl mr-4">🏆</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Badges</h3>
                <p className="text-2xl font-bold text-yellow-600">{badges.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="text-3xl mr-4">📚</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Topics</h3>
                <p className="text-2xl font-bold text-green-600">{topics.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <SearchBot onSearchChange={setSearchTerm} />
        </div>

        {/* Topics Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Topics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic) => (
              <Link key={topic.id} to={topic.path}>
                <TopicCard
                  title={topic.title}
                  description={topic.description}
                  icon={topic.icon}
                  color={topic.color}
                />
              </Link>
            ))}
          </div>
        </div>


        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/topics/python"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🐍</div>
                <div className="font-semibold">Start Python</div>
                <div className="text-sm text-gray-600">Begin coding journey</div>
              </div>
            </Link>
            <Link
              to="/topics/terminal"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">⌨️</div>
                <div className="font-semibold">Learn Terminal</div>
                <div className="text-sm text-gray-600">Master command line</div>
              </div>
            </Link>
            <Link
              to="/topics/student-life"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🎓</div>
                <div className="font-semibold">Student Life</div>
                <div className="text-sm text-gray-600">Manage academics</div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
