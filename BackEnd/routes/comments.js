import express from "express";
import auth from "../middleware/auth.js";
const routes = express.Router();
import {
  postCommentController,
  getAllCommentController,
  deleteCommentController,
  editCommentController,
} from "../controllers/comments.js";

routes.post("/post", auth, postCommentController);
routes.get("/get", getAllCommentController);
routes.delete("/delete/:id", auth, deleteCommentController);
routes.patch("/edit/:id", auth, editCommentController);

export default routes;
