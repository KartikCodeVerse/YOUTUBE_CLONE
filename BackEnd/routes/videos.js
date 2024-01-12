import express from "express";
import { uploadVideo, getAllVideos } from "../controllers/video.js";
import { likeController } from "../controllers/like.js";
import {
  likedVideoController,
  getAllLikeVideoController,
  deleteLikeVideoController,
} from "../controllers/likedVideo.js";
import { viewController } from "../controllers/views.js";
import {
  watchLaterController,
  getAllWatchLaterController,
  deleteWatchLaterController,
} from "../controllers/watchLater.js";
import {
  historyController,
  getAllHistoryController,
  clearHistoryController,
} from "../controllers/history.js";
import upload from "../Helpers/fileHelpers.js";
import auth from "../middleware/auth.js";

const routes = express.Router();

routes.post("/uploadvideo", auth, upload.single("file"), uploadVideo);
routes.get("/getvideos", getAllVideos);

routes.patch("/like/:id", auth, likeController);
routes.post("/view/:id", viewController);

routes.post("/likevideo", auth, likedVideoController);
routes.get("/getalllikevideo", getAllLikeVideoController);
routes.delete(
  "/deletelikedvideo/:videoId/:viewer",
  auth,
  deleteLikeVideoController
);

routes.post("/watchlater", auth, watchLaterController);
routes.get("/getallwatchlater", getAllWatchLaterController);
routes.delete(
  "/deletewatchlater/:videoId/:viewer",
  auth,
  deleteWatchLaterController
);

routes.post("/history", auth, historyController);
routes.get("/getallhistory", getAllHistoryController);
routes.delete("/clearhistory/:userId", auth, clearHistoryController);

export default routes;
