import React, { useRef } from 'react';
import { terminalTopics } from '../terminalBasics';
import { useXP } from '../xpContext.jsx';
import TopicIntro from '../components/TopicIntro';
import CommandList from '../components/CommandList';
import TerminalSimulator from '../components/TerminalSimulator';
import TipBox from '../components/TipBox';
import PracticeCommand from '../components/PracticeCommand';

export default function TerminalBasics() {
  const terminalRef = useRef(null);
  const { completeCommand } = useXP();

  const handleRunCommand = (command) => {
    terminalRef.current?.runCommand(command);
  };

  const handlePracticeSuccess = (topicId, cmd) => {
    completeCommand(topicId, cmd);
    // You could also show a success message here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Mastering the Terminal
      </h1>
      <div className="space-y-12">
        {terminalTopics.map((topic) => (
          <div key={topic.id} className="bg-white p-6 rounded-xl shadow-lg border">
            <TopicIntro title={topic.title} description={topic.description} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <CommandList commands={topic.commandList} onRunCommand={handleRunCommand} />
                <TipBox text={topic.tips} />
                {topic.commandList.map((c) => (
                  <PracticeCommand key={c.cmd} targetCmd={c.cmd} onSuccess={() => handlePracticeSuccess(topic.id, c.cmd)} />
                ))}
              </div>
              <TerminalSimulator ref={terminalRef} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}