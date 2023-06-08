const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  appearance: {
    type: String,
    required: true,
  },
  hungerLevel: {
    type: Number,
    default: 0,
  },
  healthLevel: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
