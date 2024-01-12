import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo.jsx";
import vid1 from "../../assets/Video/vid1.mp4";
import vid2 from "../../assets/Video/vid2.mp4";
import vid3 from "../../assets/Video/vid3.mp4";
import { useSelector } from "react-redux";

const ShowVideoList = ({ id }) => {
  const vids = useSelector((state) => state.videoReducer).data;
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid1,
  //     Chennel: "62bafe6752a6c30685f",
  //     title: "video 1",
  //     uploder: "abc",
  //     description: "description of video 1",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid2,
  //     Chennel: "62bafe6752a6c30685f",
  //     title: "video 2",
  //     uploder: "def",
  //     description: "description of video 2",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid3,
  //     Chennel: "62bafe6752a6c30685f",
  //     title: "video 3",
  //     uploder: "ghi",
  //     description: "description of video 3",
  //   },
  // ];

  return (
    <div className="video_list">
      {vids
        ?.filter((q) => q._id === id)
        .map((vi, i) => {
          return (
            <div key={i} className="video_box">
              <ShowVideo vid={vi} />
            </div>
          );
        })}
    </div>
  );
};

export default ShowVideoList;
