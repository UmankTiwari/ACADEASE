import React from 'react';

const StudentLife = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Life & Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">📅 Upcoming Events</h2>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h3 className="font-semibold">Study Group Session</h3>
                <p className="text-sm text-gray-600">Tomorrow at 2:00 PM</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h3 className="font-semibold">Coding Workshop</h3>
                <p className="text-sm text-gray-600">Friday at 4:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">📚 Academic Resources</h2>
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <h3 className="font-semibold">Library Hours</h3>
                <p className="text-sm text-gray-600">8:00 AM - 10:00 PM</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold">Tutoring Center</h3>
                <p className="text-sm text-gray-600">Available Mon-Fri</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">🎯 Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              View Schedule
            </button>
            <button className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              Join Study Group
            </button>
            <button className="p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              Book Tutor
            </button>
            <button className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              View Grades
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;