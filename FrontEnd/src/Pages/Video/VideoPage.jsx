import React, { useEffect } from "react";
import moment from "moment";
import "./VideoPage.css";
import LikeWatchLaterSaveBtn from "./LikeWatchLaterSaveBtn";
import Comments from "../../Components/Comments/Comments";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addtoHistory } from "../../Action/History";
import { viewVideo } from "../../Action/Video";

const VideoPage = () => {
  // Get the URL
  const { vid } = useParams();
  // Get Vides
  const vids = useSelector((state) => state.videoReducer)?.data;
  // Getting Req. Video
  const video = vids?.filter((q) => q._id === vid)[0];

  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const dispatch = useDispatch();
  const handleHistory = () => {
    dispatch(
      addtoHistory({
        videoId: vid,
        viewer: CurrentUser?.result._id,
      })
    );
  };
  const handleViews = () => {
    dispatch(
      viewVideo({
        id: vid,
      })
    );
  };
  useEffect(() => {
    if (CurrentUser) {
      handleHistory();
    }
    handleViews();
  }, []);

  return (
    <>
      <div className="video_page">
        <div className="video2_page">
          <div className="video_display">
            <video
              // src={`http://localhost:3000/${video?.filePath}`}
              src={`https://youtubeclone-mern.onrender.com/${video?.filePath}`}
              className="videon"
              controls
              autoPlay
            />
            <div className="video_details">
              <div className="video_btn">
                <p className="video_title">{video?.videoTitle}</p>
                <div className="video_views">
                  <div className="views">
                    {video?.Views} views <div className="dot"></div> Uploded{" "}
                    {moment(video?.createdAt).fromNow()}
                  </div>
                </div>
              </div>
              <LikeWatchLaterSaveBtn video={video} vid={vid} />
              <Link
                to={`/chanel/${video?.videoChanel}`}
                className="chanel_details"
              >
                <b className="chanel_logo">
                  <p>{video?.uploder.charAt(0).toUpperCase()}</p>
                </b>
                <p className="chanel_name">{video?.uploder}</p>
              </Link>
              <div className="comments">
                <h2>
                  <u>Comments</u>
                </h2>
                <Comments videoId={video?._id} id={vid} />
              </div>
            </div>
          </div>
          <div className="more_videoBar">More Video</div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
