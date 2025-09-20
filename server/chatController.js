const ChatHistory = require('../models/ChatHistory');

const chat = async (req, res) => {
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
    chatHistory.messages.push({ role: 'user', text: message }, { role: 'bot', text: botReply });

    await chatHistory.save();
    res.json({ reply: botReply });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Chat Server error' });
  }
};

const getChatHistory = async (req, res) => {
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
};

module.exports = {
  chat,
  getChatHistory,
};