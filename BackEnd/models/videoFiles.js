import mongoose from "mongoose";

const videoFilesSchema = new mongoose.Schema(
  {
    videoTitle: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: String,
      required: true,
    },
    videoChanel: {
      type: String,
      required: true,
    },
    Like: {
      type: Number,
      default: 0,
    },
    Views: {
      type: Number,
      default: 0,
    },
    uploder: {
      type: String,
      default: "Anonymous", // Assign the default value here
    },
  },
  { timestamps: true }
);

export default mongoose.model("VideoFiles", videoFilesSchema);
