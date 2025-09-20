import React, { useState } from 'react';

export default function InputArea({ onSend }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim() === '') {
      return;
    }
    onSend(text);
    setText('');
  };

  return (
    <div className="flex gap-2 p-4">
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type a message..." 
        className="flex-1 p-2 border rounded"
      />
      <button 
        onClick={handleSend}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
}