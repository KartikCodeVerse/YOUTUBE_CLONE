import React from "react";
import "./YourVideo.css";
import LeftSideBar from "../../Components/SideBar/LeftSideBar.jsx";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid.jsx";
import { useSelector } from "react-redux";

const YourVideo = () => {
  const CurrentUser = useSelector((state) => state.currentUserReducer);

  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q?.videoChanel === CurrentUser?.result?._id)
    .reverse();

  return (
    <div className="yourvideo_page">
      <LeftSideBar />
      <div className="yourvideo">
        <div className="yourvideo_cont">
          <h1>Your Video</h1>
          {CurrentUser ? (
            <>
              <ShowVideoGrid vids={vids} />
            </>
          ) : (
            <>
              <h1 style={{ marginTop: "20px" }}>
                Plz Login To See Your Uploaded Video List
              </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourVideo;
