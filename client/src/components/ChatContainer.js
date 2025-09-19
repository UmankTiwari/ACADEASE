import React from 'react';

function ChatContainer({ messages }) {
  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <div key={index} className="chat-message">
          <div className="user-message">{msg.message}</div>
          <div className="ai-reply">{msg.reply}</div>
        </div>
      ))}
    </div>
  );
}

export default ChatContainer;