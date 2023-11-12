import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config();
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`server listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection Failed: ", err);
  });

/*
// -----This is one approach used----- 
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error:", error);
  }
})();

*/
