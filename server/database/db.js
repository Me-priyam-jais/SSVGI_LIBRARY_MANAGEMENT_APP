import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017", {
      dbName: "SSVGI_LIB_MANAGEMENT_APP",
    })
    .then(() => {
      console.log("Database connecting successfully.");
    })
    .catch((err) => {
      console.log("Error in Connecting to Database");
    });
};
