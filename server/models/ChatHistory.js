const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema({
  userId: String,
  messages: [
    {
      role: String, // 'user' or 'bot'
      text: String,
      timestamp: { type: Date, default: Date.now }
    }
  ]cd "/Users/umanktiwari/Documents/v front end/Hackathon internal 24hrs/hackathon-app"
});

module.exports = mongoose.model('ChatHistory', chatHistorySchema);