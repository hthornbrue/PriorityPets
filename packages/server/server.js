import mongoose from "mongoose";
import usersRouter from "./routes/users";
import tasksRouter from ".routes/tasks";
import petsRouter from "./routes/pets";
import express from "express";

const app = express();

//Replace 'mongodb' url with connection information
mongoose.connect("mongodb://localhost/mydatabase", { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);
app.use("/pets", petsRouter);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
