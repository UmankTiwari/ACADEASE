const mongoose = require('mongoose');

const searchDataSchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('SearchData', searchDataSchema);