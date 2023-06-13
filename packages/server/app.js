import express from "express";
import router from "./routes/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Database
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB connected!"))
  .catch((err) => console.error(err));

const app = express();
//Replace 'mongodb' url with connection information
//app.use("/", router);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
