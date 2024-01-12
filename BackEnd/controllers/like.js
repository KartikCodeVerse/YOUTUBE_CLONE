import VideoFiles from "../models/videoFiles.js";
import mongoose from "mongoose";

export const likeController = async (req, res) => {
  const { id: _id } = req.params;
  const { like } = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Video Unavailable...");
  }
  
  try {
    const updateLike = await VideoFiles.findByIdAndUpdate(_id, {
      $set: { Like: Math.max(0, like) },
    });
    res.status(200).json(updateLike);
  } catch (error) {
    res.status(400).json("error:", error);
  }
};
