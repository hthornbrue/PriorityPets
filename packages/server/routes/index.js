import express from "express";
import userRouter from "./users";
import taskRouter from "./tasks";
import petRouter from "./pets";
const listEndpoints = require("express-list-endpoints");

const router = express.Router();
const User = require("../models");

// Define routes
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.use("/users", userRouter);
router.use("/tasks", taskRouter);
router.use("/pets", petRouter);

module.exports = router;
