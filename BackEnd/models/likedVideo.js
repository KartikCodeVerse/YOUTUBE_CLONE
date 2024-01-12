import mongoose from "mongoose";

const likedVideoSchema = mongoose.Schema({
  videoId: { type: String, require: true },
  viewer: { type: String, require: true },
  likedOn: { type: Date, default: Date.now },
});

export default mongoose.model("likedVideo", likedVideoSchema);
