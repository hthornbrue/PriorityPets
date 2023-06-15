const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  xp: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 0,
  },
  tasks: [
    {
      type: ObjectId,
      ref: "Task",
    },
  ],
  pets: {
    currentPet: {
      type: ObjectId,
      ref: "Pet",
    },
    deceasedPets: [
      {
        type: ObjectId,
        ref: "Pet",
      },
    ],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
