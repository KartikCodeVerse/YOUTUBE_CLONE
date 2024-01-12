import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./VideoUpload.css";
import { uploadVideo } from "../../Action/Video";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const VideoUpload = ({ setVidUploadpage }) => {
  const CurrentUser = useSelector((state) => state.currentUserReducer);

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSetVideoFile = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const fileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setProgress(percentage);
      if (percentage === 100) {
        setTimeout(function () {}, 3000);
        setVidUploadpage(false);
      }
    },
  };

  const uploadVideoFile = () => {
    if (!title) {
      alert("Plz Enter a Title of the video");
    } else if (!videoFile) {
      alert("Plz Attach a video file");
    } else if (videoFile.size > 30000000) {
      alert("Plz Attach video file less than 30mb");
    } else {
      const fileData = new FormData();
      fileData.append("title", title);
      fileData.append("file", videoFile);
      fileData.append("chanel", CurrentUser?.result._id);
      fileData.append("uploder", CurrentUser?.result.name);
      dispatch(
        uploadVideo({
          fileData: fileData,
          fileOptions: fileOptions,
        })
      );
    }
  };
  return (
    <div className="video_upload">
      <input
        type="submit"
        name="text"
        value={"X"}
        className="ibtn_x"
        onClick={() => setVidUploadpage(false)}
      />
      <div className="video_upload2">
        <div className="ibox_div_vidUpload">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="ibox_vidupload"
            maxLength={30}
            placeholder="Enter Title of your video"
          />

          <label htmlFor="file" className="ibox_vidupload btn_vidUpload">
            <input
              onChange={(e) => handleSetVideoFile(e)}
              type="file"
              name="file"
              className="ibox_vidupload"
              style={{ fontSize: "1rem" }}
            />
          </label>
        </div>
        <div className="ibox_div_vidUpload">
          <input
            onClick={() => uploadVideoFile()}
            type="submit"
            value={"Upload"}
            className="ibox_vidupload btn_vidUpload"
          />
        </div>
        <div className="loader ibox_div_vidUpload">
          <CircularProgressbar
            value={progress}
            text={`${progress}`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255,255,255,${progress / 100})`,
              textColor: "#f88",
              trailColor: "#adff2f",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
