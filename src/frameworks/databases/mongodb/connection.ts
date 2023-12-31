import mongoose from "mongoose";
import ENVIRONMENT_VARIABLES from "../../../config";
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(ENVIRONMENT_VARIABLES.MONGO_DB_URL, {
      dbName: ENVIRONMENT_VARIABLES.DB_NAME,
    });
    console.log(`Database connected successfully`.bgGreen.bold);
  } catch (error: any) {
    process.exit(1);
  }
};
export default connectDB;