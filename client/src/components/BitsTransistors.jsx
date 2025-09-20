import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useXP } from '../xpContext';
import Bit3DViewer from './Bit3DViewer';
import Transistor3DViewer from './Transistor3DViewer';
import Hardware3DViewer from './Hardware3DViewer';
import InteractiveScene from './InteractiveScene';
import config from '../config';

const BitsTransistors = () => {
  const [currentConcept, setCurrentConcept] = useState(0);
  const [bitValue, setBitValue] = useState(0);
  const [transistorState, setTransistorState] = useState('off');
  const [hardwareType, setHardwareType] = useState('cpu');
  const [animationData, setAnimationData] = useState(null);
  const { addXP, addBadge } = useXP();

  // Fetch animation data from backend
  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/api/animation-data`);
        if (response.ok) {
          const data = await response.json();
          setAnimationData(data);
          console.log('Animation data loaded from backend:', data);
        }
      } catch (error) {
        console.log('Backend not available, using local data');
        setAnimationData({
          bitStates: [0, 1, 0, 1, 1, 0],
          transistorStates: ['off', 'on', 'off', 'on'],
          hardwareTypes: ['cpu', 'memory', 'gpu'],
          animationSpeed: 1.0
        });
      }
    };
    fetchAnimationData();
  }, []);

  // Cycle through bit values for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setBitValue(prev => prev === 0 ? 1 : 0);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through transistor states
  useEffect(() => {
    const interval = setInterval(() => {
      setTransistorState(prev => prev === 'off' ? 'on' : 'off');
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through hardware types
  useEffect(() => {
    const types = ['cpu', 'memory', 'gpu'];
    let index = 0;
    const interval = setInterval(() => {
      setHardwareType(types[index]);
      index = (index + 1) % types.length;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const concepts = [
    {
      id: 'bits',
      title: 'Bits and Bytes',
      description: 'Understanding the fundamental units of digital information',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Digital Information</h3>
          
          {/* 3D Bit Visualization */}
          <div className="bg-gray-900 rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-white mb-4 text-center">Interactive 3D Bit Viewer</h4>
            <div className="h-64 flex justify-center items-center">
              <Bit3DViewer value={bitValue} animated={true} />
            </div>
            <p className="text-center text-gray-300 mt-2">
              Current Bit Value: <span className="font-mono text-green-400">{bitValue}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-600">Bit (Binary Digit)</h4>
              <p className="text-sm text-gray-600">The smallest unit of data - either 0 or 1</p>
              <div className="mt-2 text-xs font-mono bg-black text-green-400 p-2 rounded">
                0 or 1
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-600">Byte</h4>
              <p className="text-sm text-gray-600">8 bits grouped together</p>
              <div className="mt-2 text-xs font-mono bg-black text-green-400 p-2 rounded">
                01001000 = 'H'
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Why Binary?</h4>
            <p className="text-sm text-blue-700">Computers use binary because electronic circuits can easily represent two states: ON (1) or OFF (0)</p>
          </div>
        </div>
      )
    },
    {
      id: 'transistors',
      title: 'Transistors',
      description: 'The building blocks of modern electronics',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">What is a Transistor?</h3>
          <p>A transistor is a semiconductor device that can amplify or switch electronic signals.</p>
          
          {/* 3D Transistor Visualization */}
          <div className="bg-gray-900 rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-white mb-4 text-center">Interactive 3D Transistor</h4>
            <div className="h-64 flex justify-center items-center">
              <Transistor3DViewer state={transistorState} animated={true} />
            </div>
            <p className="text-center text-gray-300 mt-2">
              Current State: <span className="font-mono text-green-400">{transistorState.toUpperCase()}</span>
            </p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">How Transistors Work:</h4>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Three terminals:</strong> Base, Collector, Emitter</li>
              <li>• <strong>Switch function:</strong> Small current at base controls larger current between collector and emitter</li>
              <li>• <strong>Amplifier function:</strong> Small input signal becomes larger output signal</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Fun Fact:</h4>
            <p className="text-sm text-yellow-700">Modern processors contain billions of transistors, each smaller than a red blood cell!</p>
          </div>
        </div>
      )
    },
    {
      id: 'logic-gates',
      title: 'Logic Gates',
      description: 'How transistors create logical operations',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Basic Logic Gates</h3>
          
          {/* 3D Hardware Visualization */}
          <div className="bg-gray-900 rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-white mb-4 text-center">Hardware Components</h4>
            <div className="h-64 flex justify-center items-center">
              <Hardware3DViewer type={hardwareType} animated={true} />
            </div>
            <p className="text-center text-gray-300 mt-2">
              Current Component: <span className="font-mono text-green-400">{hardwareType.toUpperCase()}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-red-600">AND Gate</h4>
              <p className="text-sm text-gray-600 mb-2">Output is 1 only if both inputs are 1</p>
              <div className="text-xs font-mono bg-black text-green-400 p-2 rounded">
                A B | Output<br/>
                0 0 |   0<br/>
                0 1 |   0<br/>
                1 0 |   0<br/>
                1 1 |   1
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-600">OR Gate</h4>
              <p className="text-sm text-gray-600 mb-2">Output is 1 if either input is 1</p>
              <div className="text-xs font-mono bg-black text-green-400 p-2 rounded">
                A B | Output<br/>
                0 0 |   0<br/>
                0 1 |   1<br/>
                1 0 |   1<br/>
                1 1 |   1
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-600">NOT Gate</h4>
              <p className="text-sm text-gray-600 mb-2">Output is opposite of input</p>
              <div className="text-xs font-mono bg-black text-green-400 p-2 rounded">
                A | Output<br/>
                0 |   1<br/>
                1 |   0
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-600">XOR Gate</h4>
              <p className="text-sm text-gray-600 mb-2">Output is 1 if inputs are different</p>
              <div className="text-xs font-mono bg-black text-green-400 p-2 rounded">
                A B | Output<br/>
                0 0 |   0<br/>
                0 1 |   1<br/>
                1 0 |   1<br/>
                1 1 |   0
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const completeConcept = () => {
    addXP(40);
    addBadge({
      name: 'Digital Master',
      icon: '⚡',
      description: 'Mastered bits and transistors!'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-lg p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">⚡ Bits & Transistors</h1>
              <p className="text-gray-600">Understanding the digital world at its core</p>
            </div>
            <Link 
              to="/" 
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Concept Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Concepts</h3>
              <div className="space-y-2">
                {concepts.map((concept, index) => (
                  <button
                    key={concept.id}
                    onClick={() => setCurrentConcept(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentConcept === index
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-medium">{concept.title}</div>
                    <div className="text-sm opacity-75">{concept.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Concept Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {concepts[currentConcept].title}
                </h2>
                <p className="text-gray-600">{concepts[currentConcept].description}</p>
              </div>
              
              <div className="mb-8">
                {concepts[currentConcept].content}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  {currentConcept > 0 && (
                    <button
                      onClick={() => setCurrentConcept(currentConcept - 1)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      ← Previous
                    </button>
                  )}
                  {currentConcept < concepts.length - 1 && (
                    <button
                      onClick={() => setCurrentConcept(currentConcept + 1)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      Next →
                    </button>
                  )}
                </div>
                
                <button
                  onClick={completeConcept}
                  className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Complete Concept (+40 XP)
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BitsTransistors;
