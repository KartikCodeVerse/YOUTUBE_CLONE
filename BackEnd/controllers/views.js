import videoFiles from "../models/videoFiles.js";
import VideoFiles from "../models/videoFiles.js";
import mongoose from "mongoose";

export const viewController = async (req, res) => {
  const { id: id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Video Unavailable...");
  }
  try {
    const file = await videoFiles.findById(id);
    const views = file.Views;
    const updateView = await VideoFiles.findByIdAndUpdate(id, {
      $set: { Views: views + 1 },
    });
    res.status(200).json(updateView);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
