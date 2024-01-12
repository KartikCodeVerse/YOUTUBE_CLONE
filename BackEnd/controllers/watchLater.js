import watchLater from "../models/watchLater.js";

import mongoose from "mongoose";

export const watchLaterController = async (req, res) => {
  const watchLaterData = req.body;
  const addToWatchLater = new watchLater(watchLaterData);

  try {
    await addToWatchLater.save();
    res.status(200).json("added to watchLater");
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllWatchLaterController = async (req, res) => {
  try {
    const files = await watchLater.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteWatchLaterController = async (req, res) => {
  const { videoId: videoId, viewer: viewer } = req.params;

  try {
    await watchLater.findOneAndDelete({
      videoId: videoId,
      viewer: viewer,
    });
    res.status(200).send("Removed from your watch later");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
