import mongoose from "mongoose";
import { config } from "dotenv";
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "SSVGI_LIB_MANAGEMENT_APP",
    })
    .then(() => {
      console.log("Database connected successfully.");
    })
    .catch((err) => {
      console.log("Error in Connecting to Database");
    });
};
