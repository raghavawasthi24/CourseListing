const mongoose = require("mongoose");

let courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  }, // Name of the course instructor
  description: {
    type: String,
    default:"",
  },
  enrollmentStatus: {
    type: String,
    required: true,
  }, // Can be 'Open', 'Closed', or 'In Progress'

  thumbnail: {
    type: String,
    default:"",
  }, //Link to the course thumbnail

  duration: {
    type: String,
    required: true,
  }, // Duration of the course

  schedule: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  prerequisites: {
    type: Array,
    required: true,
  },

  syllabus: [
    {
      week: {
        type: String,
        required: true,
      },
      topic: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  ],
  students: [ ],
});

module.exports = mongoose.model("Course", courseSchema);
