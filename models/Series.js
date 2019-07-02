const mongoose = require('mongoose');

// database schema
const seriesSchema = new mongoose.Schema({
  HomeId: {
    type: Number,
    trim: true,
  },
  AwayId: {
    type: Number,
    trim: true,
  },
  Home1: {
    type: Number,
  },
  Away1: {
    type: Number,
  },
  Date1: {
    type: Date
  },
  Home2: {
    type: Number,
  },
  Away2: {
    type: Number,
  },
  Date2: {
    type: Date,
  },
  Home3: {
    type: Number,
  },
  Away3: {
    type: Number,
  },
  Date3: {
    type: Date,
  },
  Home4: {
    type: Number,
  },
  Away4: {
    type: Number,
  },
  Date4: {
    type: Date,
  }
});

module.exports = mongoose.model('Series', seriesSchema);
