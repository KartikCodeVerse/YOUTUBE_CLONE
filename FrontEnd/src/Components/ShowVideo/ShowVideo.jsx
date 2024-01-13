import React from "react";
import "./ShowVideo.css";
import moment from "moment";
import { Link } from "react-router-dom";

const ShowVideo = ({ vid }) => {
  return (
    <>
      <Link to={`${"/video/" + vid._id}`} className="show_video">
        <video
          className="video_ShowVideo"
          // src={`http://localhost:3000/${vid?.filePath}`}
          src={`https://youtubeclone-mern.onrender.com/${vid?.filePath}`}
        />
      </Link>
      <div className="show_description">
        <div className="Chenel_logo_App">
          <div className="fstChhar_logo_App">
            <p>{vid?.uploder.charAt(0).toUpperCase()}</p>
          </div>
        </div>
        <div className="show_details">
          <p className="title">{vid?.videoTitle}</p>
          <pre className="time">{vid?.createdAt}</pre>
          <pre className="views_updoadtime">
            {vid?.Views} Views <div className="dot"></div> {vid.uploder} Uploded
            {moment(vid?.createdAt).fromNow()}
          </pre>
        </div>
      </div>
    </>
  );
};

export default ShowVideo;
