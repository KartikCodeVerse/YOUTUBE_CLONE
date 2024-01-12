import mongoose from "mongoose";

const historySchema = mongoose.Schema({
  videoId: { type: String, require: true },
  viewer: { type: String, require: true },
  viewedOn: { type: Date, default: Date.now },
});

export default mongoose.model("history", historySchema);
