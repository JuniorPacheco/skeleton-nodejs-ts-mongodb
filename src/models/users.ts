import mongoose from "mongoose";

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.model("users", UserScheme);

export default UserModel;
