const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 100,
    required: true
  },
  address: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 100,
    required: true
  },
  phone: {
    type: String,
    trim: true,
    minlength: 5,
    maxlength: 100,
    required: true
  },
  schoolyear: {
    type: String,
    trim: true,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  abElE3traf: {  // ✅ Match frontend field
    type: String,
    trim: true,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  elktae: {
    type: String,
    trim: true,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  elsarat: {
    type: String,
    trim: true,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
