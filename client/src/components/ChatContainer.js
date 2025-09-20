import React from 'react';

function ChatContainer({ messages }) {
  return (
    <div className="chat-container">
      {messages?.map((msg, index) => (
        <div key={index} className="chat-message">
          <div className="user-message p-2 bg-gray-100 rounded-md">{msg.message}</div>
          <div className="ai-reply p-2 bg-blue-100 rounded-md">{msg.reply}</div>
        </div>
      ))}
    </div>
  );
}

export default ChatContainer;