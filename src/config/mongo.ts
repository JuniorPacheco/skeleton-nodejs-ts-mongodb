import mongoose, { connect } from "mongoose";
import "dotenv/config";

mongoose.set("strictQuery", true);

const dbConnect = async () => {
  const DB_URI: string = <string>process.env.DB_URI;
  await connect(DB_URI);
};

export default dbConnect;
