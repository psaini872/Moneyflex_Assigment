import mongoose from 'mongoose';
import validator from 'validator';

const user = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'provide a vaild email'],
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    enum: ['male', 'female'],
  },

  timing: {
    type: Number,
    enum: [1, 2, 3, 4],
    required: true,
  },
  mounth: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('User', user);
