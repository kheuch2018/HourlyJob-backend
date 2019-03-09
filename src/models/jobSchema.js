const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Email: { type: String, required: true },
  Rate: { type: String, required: true }
});

module.exports = mongoose.model("Job", jobSchema);
