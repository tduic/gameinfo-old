const mongoose = require('mongoose');

// database schema
const teamSchema = new mongoose.Schema({
  TeamId: {
    type: Number,
  },
  Name: {
    type: String,
    trim: true,
  },
  CityName: {
    type: String,
    trim: true,
  },
  SeriesPlayed: {
    type: Number,
  },
  SeriesSwept: {
    type: Number,
  },
  SeriesSweeps: {
    type: Number,
  },
  GamesPlayed: {
    type: Number,
  },
  GamesWon: {
    type: Number,
  },
  GamesLost: {
    type: Number,
  }
});

module.exports = mongoose.model('Team', teamSchema);
