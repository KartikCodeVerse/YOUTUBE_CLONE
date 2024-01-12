import comment from "../models/comment.js";

import mongoose from "mongoose";

export const postCommentController = async (req, res) => {
  const commentData = req.body;
  const postComment = new comment(commentData);

  try {
    await postComment.save();
    res.status(200).json("posted comment");
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllCommentController = async (req, res) => {
  try {
    const commentList = await comment.find();
    res.status(200).send(commentList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteCommentController = async (req, res) => {
  const { id: id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Comment Unavailable...");
  }
  try {
    await comment.findByIdAndDelete(id);
    res.status(200).send("deleted comment");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const editCommentController = async (req, res) => {
  const { id: id } = req.params;
  const { commentBody } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Comment Unavailable...");
  }
  try {
    await comment.findByIdAndUpdate(id, {
      $set: { commentBody: commentBody },
    });
    res.status(200).json("updated comment");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
