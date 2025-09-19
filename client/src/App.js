import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import ChatContainer from './components/ChatContainer';
import InputArea from './components/InputArea';

function App() {
  const [results, setResults] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.post('http://localhost:5000/api/search', { query });
      setResults(response.data);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const handleSend = async (message) => {
    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        userId: 'default-user',  // You can implement proper user management later
        message
      });
      const reply = response.data.reply;
      setMessages(prevMessages => [...prevMessages, { message, reply }]);
    } catch (error) {
      console.error('Chat error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center py-4">Acadease</h1>
      <div className="max-w-4xl mx-auto">
        <SearchBar onSearch={handleSearch} />
        <ResultsList results={results} />
        <ChatContainer messages={messages} />
        <InputArea onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;
