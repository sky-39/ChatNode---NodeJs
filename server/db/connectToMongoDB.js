import mongoose from "mongoose";
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB..");
  } catch (err) {
    console.log("Error in connecting to MongoDB..", err.message);
  }
};

export default connectToMongoDB;
