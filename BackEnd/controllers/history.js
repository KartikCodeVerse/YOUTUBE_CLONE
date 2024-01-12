import history from "../models/history.js";

import mongoose from "mongoose";

export const historyController = async (req, res) => {
  const historyData = req.body;
  const addTohistory = new history(historyData);

  try {
    await addTohistory.save();
    res.status(200).json("added to history");
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllHistoryController = async (req, res) => {
  try {
    const files = await history.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const clearHistoryController = async (req, res) => {
  const { userId: userId } = req.params;

  try {
    await history.deleteMany({
      viewer: userId,
    });
    res.status(200).send("Removed from your history");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
