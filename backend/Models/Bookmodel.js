const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  published_date: { type: Date, required: true },
  category: { type: String, required: true },
  status: { type: String, enum: ['Available', 'Unavailable'], default: 'Available' }
});

module.exports = mongoose.model('Book', bookSchema);
