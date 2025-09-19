const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Models
const SearchData = require('./models/SearchData');

const ChatHistory = require('./models/ChatHistory');

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

// Test route
app.get('/', (req, res) => res.send('Backend running'));

// Search API route
app.post('/api/search', async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    const results = await SearchData.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ]
    }).limit(10);

    res.json(results);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Chat API route
app.post('/api/chat', async (req, res) => {
  try {
    const { userId, message } = req.body;
    if (!message || !userId) {
      return res.status(400).json({ error: 'User ID and message are required' });
    }

    // Here you would typically call your AI API
    // For now, we'll echo back a simple response
    const botReply = `You said: ${message}`;

    // Find or create chat history for this user
    let chatHistory = await ChatHistory.findOne({ userId });
    if (!chatHistory) {
      chatHistory = new ChatHistory({ userId, messages: [] });
    }

    // Add user message and bot reply
    chatHistory.messages.push(
      { role: 'user', text: message },
      { role: 'bot', text: botReply }
    );

    await chatHistory.save();
    res.json({ reply: botReply });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get chat history
app.get('/api/chat/history', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const chatHistory = await ChatHistory.findOne({ userId });
    res.json(chatHistory?.messages || []);
  } catch (error) {
    console.error('Chat history error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Helper route to add test search data
app.post('/api/search/seed', async (req, res) => {
  try {
    const testData = [
      {
        title: 'Getting Started with React',
        description: 'Learn the basics of React including components, props, and state.'
      },
      {
        title: 'MongoDB Tutorial',
        description: 'Complete guide to using MongoDB with Node.js'
      }
    ];

    await SearchData.insertMany(testData);
    res.json({ message: 'Test data added successfully' });
  } catch (error) {
    console.error('Seed error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(5000, () => console.log('🚀 Server running on port 5000'));