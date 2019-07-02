const mongoose = require('mongoose');

// database schema
const playerSchema = new mongoose.Schema({
  PlayerId: {
    type: Number,
  },
  Name: {
    type: String,
    trim: true,
  },
  TeamId: {
    type: String,
    trim: true,
  },
  Hits: {
    type: Number,
  },
  OnBases: {
    type: Number,
  },
  Runs: {
    type: Number,
  },
  IsInjured: {
    type: Boolean,
  },
  Depth: {
    type: Number,
  },
});

module.exports = mongoose.model('Player', playerSchema);
