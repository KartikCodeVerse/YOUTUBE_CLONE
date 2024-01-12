import VideoFiles from "../models/videoFiles.js";

export const uploadVideo = async (req, res, next) => {
  if (req.file === undefined) {
    res.status(404).json({ message: "Plz Upload a '.mp4' video file only" });
  } else {
    try {
      const file = new VideoFiles({
        videoTitle: req.body.title,
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: req.file.size,
        videoChanel: req.body.chanel,
        uploder: req.body.uploder,
      });
      await file.save();
      res.status(201).send("File uploded successfully");
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
};

export const getAllVideos = async (req, res) => {
  try {
    const files = await VideoFiles.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
