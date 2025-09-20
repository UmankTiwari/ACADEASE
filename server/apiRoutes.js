const express = require('express');
const router = express.Router();
const { getClasses, getSubjects, getSyllabus } = require('../controllers/dataController');
const { search } = require('../controllers/searchController');
const { chat, getChatHistory } = require('../controllers/chatController');

// These routes correspond to the functions in your frontend's `api.js` service
router.get('/classes', getClasses);
router.get('/subjects/:level', getSubjects);
router.get('/syllabus/:level/:subject', getSyllabus);

// Search and Chat routes
router.post('/search', search);
router.post('/chat', chat);
router.get('/chat/history', getChatHistory);

module.exports = router;