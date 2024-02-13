import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
      console.log("Database is connected successfully ");
    } catch (error) {
    console.log(error, "Error while connecting db");
  }
};

export default connectdb;
