import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import videoRoutes from "./routes/videos.js";
import commentsRoutes from "./routes/comments.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/uploads", express.static(path.join("uploads")));

const PORT = process.env.PORT || 5050;
const DB_URL = process.env.DB_URL;

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use("/comment", commentsRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server Running on the PORT ${PORT}`);
});

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("MongoDB database connected");
  })
  .catch((err) => {
    console.log(err);
  });
