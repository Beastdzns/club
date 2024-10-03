const mongoose = require('mongoose');

// Define the schema for the application
const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  skills: {
    type: [String], 
    required: true,
  },
  prn: {
    type: String,
    required: true,
    length: 8, // Ensure it's 8 characters
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /.+@viit\.ac\.in$/.test(v); // Regex to validate email domain
      },
      message: (props) => `${props.value} is not a valid email domain!`,
    },
  },
  club: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
});


const Application = mongoose.model('Application', applicationSchema);


module.exports = Application;
