const express = require("express");
const usersRouter = require("./routes/users");
const tasksRouter = require("./routes/tasks");
const petsRouter = require("./routes/pets");
const mongoose = require("mongoose");
require("dotenv").config();

// Database
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB connected!"))
  .catch((err) => console.error(err));

const app = express();
//Replace 'mongodb' url with connection information
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);
app.use("/pets", petsRouter);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
