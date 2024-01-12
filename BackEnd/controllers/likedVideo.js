import likedVideo from "../models/likedVideo.js";

import mongoose from "mongoose";

export const likedVideoController = async (req, res) => {
  const likedVideoData = req.body;
  const addToLikedVideo = new likedVideo(likedVideoData);

  try {
    await addToLikedVideo.save();
    res.status(200).json("added to likedVideo");
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllLikeVideoController = async (req, res) => {
  try {
    const files = await likedVideo.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteLikeVideoController = async (req, res) => {
  const { videoId: videoId, viewer: viewer } = req.params;

  try {
    await likedVideo.findOneAndDelete({
      videoId: videoId,
      viewer: viewer,
    });
    res.status(200).send("Removed from your liked video..");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
