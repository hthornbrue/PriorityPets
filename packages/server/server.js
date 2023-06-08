import mongoose from "mongoose";
import usersRouter from "./routes/users";
import tasksRouter from ".routes/tasks";
import petsRouter from "./routes/pets";
import express from "express";


// Database
require("dotenv").config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI,{ userNewUrlParser:
true})
.then(()=> console.log ('DB connected!'))
.catch(err=> console.error(err))

const app = express();
//Replace 'mongodb' url with connection information
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);
app.use("/pets", petsRouter);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
