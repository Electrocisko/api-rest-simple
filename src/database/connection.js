import mongoose from "mongoose";
import configDotenv from "../configs/configDotenv.js";

const  conecctionString = configDotenv.mongo.MONGO_URI;

const connection = async () => {
  try {
    await mongoose.connect(conecctionString);
    console.log("Database connected")
  } catch (error) {
    throw new Error("Does not have connect to database");
  }
};

export default connection;
