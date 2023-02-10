import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes";
import dbConnect from "./config/mongo";

const PORT: string = process.env.PORT || "3002";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log("Started on port " + PORT);
});

dbConnect().then(() => {
  console.log("********** Correct Conection to DBNoSql **********")
})
