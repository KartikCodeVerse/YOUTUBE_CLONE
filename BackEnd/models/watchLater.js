import mongoose from "mongoose";

const watcLaterSchema = mongoose.Schema({
  videoId: { type: String, require: true },
  viewer: { type: String, require: true },
  savedOn: { type: Date, default: Date.now },
});

export default mongoose.model("watchLater", watcLaterSchema);
