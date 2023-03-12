const mongoose = require("mongoose");

const AppointSchema = mongoose.Schema({
  appDate: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  hospital: {
    type: mongoose.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Appointment", AppointSchema);