import React, { useEffect, useState } from "react";
import "./LikeWatchLaterSaveBtn.css";
import { BsThreeDots } from "react-icons/bs";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import {
  AiOutlineLike,
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
} from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { likeVideo } from "../../Action/Video";
import { addToLikedVideo, deleteLikedVideo } from "../../Action/likedVideo";
import { addtowatchLater, deletewatchLater } from "../../Action/WatchLater";

const LikeWatchLaterSaveBtn = ({ video, vid }) => {
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const likedVideoList = useSelector((state) => state.likedVideoReducer);
  const watchLater = useSelector((state) => state?.watchLaterReducer);

  const [Saved, SetSave] = useState(false);
  const [Like, SetLike] = useState(false);
  const [DisLike, SetDisLike] = useState(false);

  useEffect(() => {
    if (likedVideoList && likedVideoList.data) {
      likedVideoList.data
        .filter(
          (q) => q?.videoId === vid && q?.viewer === CurrentUser?.result._id
        )
        .map((m) => SetLike(true));
    }

    if (watchLater && watchLater.data) {
      watchLater.data
        .filter(
          (q) => q?.videoId === vid && q?.viewer === CurrentUser?.result._id
        )
        .map((m) => SetSave(true));
    }
  }, []);

  const ClickForSave = () => {
    if (CurrentUser) {
      if (Saved) {
        SetSave(false);
        dispatch(
          deletewatchLater({
            videoId: vid,
            viewer: CurrentUser?.result._id,
          })
        );
      } else {
        SetSave(true);
        dispatch(
          addtowatchLater({
            videoId: vid,
            viewer: CurrentUser?.result._id,
          })
        );
      }
    } else {
      alert("Plz Login to save the video..");
    }
  };
  const ClickForLike = (e, like) => {
    if (CurrentUser) {
      SetLike(true);
      SetDisLike(false);
      dispatch(
        likeVideo({
          id: vid,
          like: like + 1,
        })
      );
      dispatch(
        addToLikedVideo({
          videoId: vid,
          viewer: CurrentUser?.result._id,
        })
      );
    } else {
      alert("Plz login to give a like");
    }
  };
  const ClickForDislike = (e, like) => {
    if (CurrentUser) {
      SetDisLike(true);
      SetLike(false);
      dispatch(
        likeVideo({
          id: vid,
          like: like - 1,
        })
      );
      dispatch(
        deleteLikedVideo({
          videoId: vid,
          viewer: CurrentUser?.result._id,
        })
      );
    } else {
      alert("Plz login to give a dislike");
    }
  };
  return (
    <div className="watch_later">
      <div className="btn_watch">
        <BsThreeDots />
      </div>
      <div className="btn_watch">
        <div className="like_btn" onClick={(e) => ClickForLike(e, video.Like)}>
          {Like ? (
            <>
              <AiFillLike size={22} className="btns_watch" />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btns_watch" />
            </>
          )}
          <b>{video?.Like}</b>
        </div>

        <div
          className="like_btn"
          onClick={(e) => ClickForDislike(e, video?.Like)}
        >
          {DisLike ? (
            <>
              <AiFillDislike size={22} className="btns_watch" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_watch" />
            </>
          )}
          <b>Dislike</b>
        </div>

        <div className="like_btn" onClick={ClickForSave}>
          {Saved ? (
            <>
              <MdPlaylistAddCheck size={22} className="btns_watch" />
              <b>Saved</b>
            </>
          ) : (
            <>
              <MdPlaylistAdd size={22} className="btns_watch" />
              <b>Save</b>
            </>
          )}
        </div>

        <div className="like_btn">
          <RiShareForwardLine size={22} className="btns_watch" />
          <b>Share</b>
        </div>
      </div>
    </div>
  );
};

export default LikeWatchLaterSaveBtn;
